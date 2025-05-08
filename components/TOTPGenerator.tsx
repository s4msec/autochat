"use client";

import React, { useState, useEffect } from "react";

interface TOTPGeneratorProps {
  secret: string;
}

const STEP = 30;

const TOTPGenerator: React.FC<TOTPGeneratorProps> = ({ secret }) => {
  const [code, setCode] = useState<string>("000000");
  const [remaining, setRemaining] = useState<number>(STEP);

  // big donut parameters
  const radius = 30;
  const strokeWidth = 4;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference * (1 - remaining / STEP);

  // mini donut parameters
  const smallRadius = 10;
  const smallStroke = 2;
  const normSmallR = smallRadius - smallStroke / 2;
  const circSmall = normSmallR * 2 * Math.PI;

  // Decodifica Base32 para Uint8Array
  const base32ToUint8Array = (base32: string): Uint8Array => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    const cleaned = base32.replace(/=+$/g, "").replace(/\s+/g, "").toUpperCase();
    let buffer = 0,
      bitsLeft = 0;
    const bytes: number[] = [];

    for (const char of cleaned) {
      const val = alphabet.indexOf(char);
      if (val === -1) continue;
      buffer = (buffer << 5) | val;
      bitsLeft += 5;
      if (bitsLeft >= 8) {
        bitsLeft -= 8;
        bytes.push((buffer >>> bitsLeft) & 0xff);
      }
    }
    return new Uint8Array(bytes);
  };

  // Gera o TOTP conforme RFC 6238
  const generateTOTP = async (secretKey: string): Promise<string> => {
    const key = await crypto.subtle.importKey(
      "raw",
      base32ToUint8Array(secretKey),
      { name: "HMAC", hash: "SHA-1" },
      false,
      ["sign"]
    );

    const epoch = Math.floor(Date.now() / 1000);
    const counter = Math.floor(epoch / STEP);
    const counterBuf = new ArrayBuffer(8);
    new DataView(counterBuf).setUint32(4, counter, false);

    const hmac = await crypto.subtle.sign("HMAC", key, counterBuf);
    const bytes = new Uint8Array(hmac);
    const offset = bytes[bytes.length - 1] & 0x0f;
    const codeInt =
      ((bytes[offset] & 0x7f) << 24) |
      ((bytes[offset + 1] & 0xff) << 16) |
      ((bytes[offset + 2] & 0xff) << 8) |
      (bytes[offset + 3] & 0xff);
    const otp = (codeInt % 10 ** 6).toString().padStart(6, "0");

    setRemaining(STEP - (epoch % STEP));
    return otp;
  };

  // Atualiza o código a cada segundo
  useEffect(() => {
    let mounted = true;

    const tick = async () => {
      if (!mounted) return;
      const otp = await generateTOTP(secret);
      if (mounted) setCode(otp);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [secret]);

  return (
    <div className="flex flex-col justify-center items-center mt-8 text-center">
      <div className="inline-flex items-center">
        <span className="text-sm bg-blue-500 p-2 rounded-l-lg">
          <span className="text-white font-bold">OTP Code</span>
        </span>
        <div className="flex space-x-2 text-sm text-white bg-neutral-600 p-2 rounded-r-lg font-bold items-center">
          <p>{code}</p>

          {/* mini‐donut countdown */}
          <svg
            width={smallRadius * 2}
            height={smallRadius * 2}
            className="-rotate-90"
          >
            <circle
              stroke="currentColor"
              className="text-neutral-700"
              fill="transparent"
              strokeWidth={smallStroke}
              r={normSmallR}
              cx={smallRadius}
              cy={smallRadius}
            />
            <circle
              stroke="currentColor"
              className="text-white transition-all duration-500 ease-linear"
              fill="transparent"
              strokeWidth={smallStroke}
              r={normSmallR}
              cx={smallRadius}
              cy={smallRadius}
              strokeDasharray={`${circSmall} ${circSmall}`}
              strokeDashoffset={circSmall * (1 - remaining / STEP)}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TOTPGenerator;

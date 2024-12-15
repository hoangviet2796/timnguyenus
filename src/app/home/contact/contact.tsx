import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "@/components/icons";
import Link from "next/link";
import conTactCss from "./contact.module.css";

export default function Contact() {
  return (
    <div
      className={`w-full h-full ${conTactCss.footer} flex flex-col items-center py-10 z-10`}
    >
      <div className="max-w-screen-xl text-start">
        <h3 className="sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-5 text-white">
          CÁC GOOD DEAL
        </h3>
        <p className="sm:text-xl md:text-2xl xl:text-3xl font-medium text-[--text-primary-color] italic">
          Tim hỗ trợ thành công
        </p>
      </div>
    </div>
  );
}

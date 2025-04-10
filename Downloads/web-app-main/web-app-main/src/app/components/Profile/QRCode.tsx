"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FiX } from "react-icons/fi";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileImage: string | null;
  profileName: string;
  qrCodeSrc: string;
}

export default function QRCodeModal({ isOpen, onClose, profileImage, profileName, qrCodeSrc }: QRCodeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-6 left-80 rounded-xl flex flex-col items-center gap-4" aria-describedby={undefined}>
        
        {/* Header Section with Close Button */}
        <DialogHeader className="w-full flex justify-between items-center">
          <div>
            <DialogTitle className="text-lg font-semibold">My QR Code</DialogTitle>
            <DialogDescription className="text-sm text-gray-500">Scan this QR code to share your profile.</DialogDescription>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={20} />
          </button>
        </DialogHeader>

        {/* Profile Avatar */}
        <Avatar className="w-16 h-16">
          {profileImage ? (
            <AvatarImage src={profileImage} alt={profileName} />
          ) : (
            <AvatarFallback className="bg-gray-300 text-gray-700">{profileName.charAt(0).toUpperCase()}</AvatarFallback>
          )}
        </Avatar>

        {/* Profile Name */}
        <p className="text-lg font-medium text-gray-800">{profileName}</p>

        {/* QR Code Image */}
        <img src={qrCodeSrc} alt="QR Code" className="w-40 h-40 border border-gray-200 shadow-md rounded-lg" />

        {/* Close Button */}
        <Button className="w-full mt-2" onClick={onClose}>Close</Button>

      </DialogContent>
    </Dialog>
  );
}

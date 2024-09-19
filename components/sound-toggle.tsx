"use client"

import { useSoundStore } from "@/store/sound-store";

const SoundToggle = () => {
    const soundEnabled = useSoundStore((state) => state.soundEnabled)
    const toggleSound = useSoundStore((state) => state.toggleSound)
    return (
        <button
            onClick={toggleSound}
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 border"
        >
            {soundEnabled ? '🔊 ' : '🔇'}
        </button>
    );
}
 
export default SoundToggle;
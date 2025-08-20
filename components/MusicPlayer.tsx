
import React, { useState, useRef } from 'react';
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from './Icons';

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => console.error("Audio play failed:", error));
            }
            setIsPlaying(!isPlaying);
        }
    };
    
    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    }

    return (
        <div className="fixed bottom-5 right-5 bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center space-x-2 shadow-lg z-50">
            {/* Using a placeholder for audio source. In a real app, you'd host this file. */}
            <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
            
            <button onClick={togglePlayPause} className="p-2 text-brand-gold hover:text-white transition-colors">
                {isPlaying ? <PauseIcon className="h-6 w-6" /> : <PlayIcon className="h-6 w-6" />}
            </button>
            <button onClick={toggleMute} className="p-2 text-brand-gold hover:text-white transition-colors">
                {isMuted ? <SpeakerXMarkIcon className="h-6 w-6" /> : <SpeakerWaveIcon className="h-6 w-6" />}
            </button>
        </div>
    );
};

export default MusicPlayer;

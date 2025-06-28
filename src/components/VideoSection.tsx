
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { t } = useLanguage();

  const togglePlay = () => {
    const video = document.getElementById('intro-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById('intro-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('video.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('video.description')}
            </p>
          </div>

          <Card className="gradient-border hover-lift overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-card">
                <video
                  id="intro-video"
                  className="w-full h-full object-cover"
                  poster="/my_avatar.png"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={(e) => {
                    console.log('Video failed to load, showing placeholder');
                  }}
                >
                  <source src="/my_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video overlay with fallback */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                  {/* Placeholder content when video isn't available */}
                  <div className="text-center text-white">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center animate-glow">
                      <img
                        src="/my_avatar.png"
                        alt="Prabhasa Avatar"
                        className="w-24 h-24 rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Video Introduction</h3>
                    <p className="text-lg text-gray-300 mb-6">Coming Soon</p>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={togglePlay}
                      className="text-white hover:text-primary hover:bg-white/20"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleMute}
                      className="text-white hover:text-primary hover:bg-white/20"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                  </div>
                  <div className="text-white text-sm">
                    {t('video.title')}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

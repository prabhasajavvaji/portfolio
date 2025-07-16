import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import myHeadshot from "../assets/my_headshot.jpg";
import myVideo from "../assets/my_video.mp4";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const { t } = useLanguage();

  const togglePlay = () => {
    const video = document.getElementById('intro-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
        setHasStarted(true);
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
              <div className="relative aspect-video bg-black">
                {/* Headshot Image - shown until video starts playing */}
                {!hasStarted && (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={myHeadshot}
                      alt="Prabhasa Javvaji"
                      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/20 shadow-2xl"
                    />
                  </div>
                )}
                
                <video
                  id="intro-video"
                  className={`w-full h-full object-cover ${!hasStarted ? 'hidden' : ''}`}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={(e) => {
                    console.log('Video failed to load, showing placeholder');
                  }}
                >
                  <source src={myVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

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


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Video } from "lucide-react";

export const VideoSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Video className="h-6 w-6" />
          Video Introduction
        </CardTitle>
        <CardDescription>
          Get to know me better through this personal introduction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
          {/* Placeholder for video - you can replace this with actual video embed */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Play className="h-8 w-8 text-primary ml-1" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Personal Introduction</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Learn about my engineering journey, passion for semiconductor technology, 
                  and vision for innovation in power electronics and automotive systems.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Video coming soon - Currently preparing a professional introduction
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">🎯</div>
            <div className="text-sm font-medium">Career Focus</div>
            <div className="text-xs text-muted-foreground">Semiconductor Innovation</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">🚀</div>
            <div className="text-sm font-medium">Research Interest</div>
            <div className="text-xs text-muted-foreground">Power Electronics</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">🌟</div>
            <div className="text-sm font-medium">Goal</div>
            <div className="text-xs text-muted-foreground">Reliability Solutions</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
    title: string;
    tagline: string;
    description: string;
    icon: string;
    price_range?: string;
}

export function ServiceCard({ title, tagline, description, icon, price_range }: ServiceCardProps) {
    // Dynamically get the icon component from lucide-react
    const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Code;

    return (
        <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{title}</CardTitle>
                <CardDescription className="text-base">{tagline}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
                <div className="text-muted-foreground">
                    <MarkdownRenderer content={description} />
                </div>
                {price_range && (
                    <div className="mt-6 pt-4 border-t">
                        <p className="text-sm text-muted-foreground">Starting at</p>
                        <p className="text-2xl font-bold text-primary">{price_range}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

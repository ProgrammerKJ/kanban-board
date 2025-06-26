import { Button } from "@/components/ui/button"

export default function About(){
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="text-lg">
               This is a Kanban board application, used to assist software engineer teams
            </p>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Shadcn Button Demo</h2>
                <div className="flex gap-4">
                    <Button>Default Button</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                </div>
            </div>
        </div>
    );
}
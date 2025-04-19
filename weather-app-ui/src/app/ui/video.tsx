
interface VideoProps {
    src: string;
}

export function Video({src}: VideoProps) {
    return (
        <div className="ratio ratio-4x3">
            <iframe src={src} allowFullScreen>
            </iframe>
        </div>
    );
}

interface VideoProps {
    src: string;
}

export function Video({src}: VideoProps) {
    return (
        <div style={{ width: '640px', height: '480px'}} className="shadow-sm ">
            <iframe
                src={src}
                allowFullScreen
                style={{ width: '640px', height: '480px' }}
            />
        </div>

    );
}
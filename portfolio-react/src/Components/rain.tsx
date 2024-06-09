export function Rain() {
    const drops = [];
    for (let i = 0; i < 100; i++) {
        drops.push(<div className="drop" style={{ left: `${Math.random() * 100}vw`, animationDuration: `${Math.random() * 1 + 0.5}s` }} />);
    }
    return <div className="rain">{drops}</div>;
}


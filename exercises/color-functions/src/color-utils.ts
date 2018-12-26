//TODO: Implement hexToRgb
export function hexToRgb(hex: string) : { r: number, g: number, b: number }{    
    if(hex.length === 3){
        const hr = hex[0];
        const hg = hex[1];
        const hb = hex[2]
        return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
    }

    const [r, g, b] = [0, 2, 4]
        .map(offset => hex.substring(offset, offset + 2))
        .map(hexCh => parseInt(hexCh, 16));
    return { r, g, b};
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
    return [r, g, b]
                .map(decCh => Math.max(0, Math.min(255, decCh)).toString(16))
                .map(hexCh => hexCh.length === 1 ? `0${hexCh}` : hexCh)
                .join('');
}
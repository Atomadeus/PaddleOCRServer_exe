export default`
    uniform sampler2D glyphTexture;
    uniform bool picking;
    varying vec2 vUv;
    varying vec3 vColor;

    void main() {
        if (picking) {
            gl_FragColor = vec4(vColor, 1.0);
        } else {
            vec4 fromTexture = texture(glyphTexture, vUv);
            gl_FragColor = vec4(vColor, 1.0) * fromTexture;
        }
    }
`;

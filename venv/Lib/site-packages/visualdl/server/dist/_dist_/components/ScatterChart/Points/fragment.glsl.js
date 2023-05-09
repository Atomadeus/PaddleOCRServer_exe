import{ShaderChunk as o}from"../../../../__snowpack__/pkg/three.js";export default`
    varying vec3 vColor;

    ${o.common}
    ${o.fog_pars_fragment}

    void main() {
        float r = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (r < 0.5) {
            gl_FragColor = vec4(vColor, 1.0);
        } else {
            discard;
        }
        ${o.fog_fragment}
    }
`;

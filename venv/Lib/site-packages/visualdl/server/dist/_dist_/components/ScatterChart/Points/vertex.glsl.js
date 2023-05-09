import{ShaderChunk as o}from"../../../../__snowpack__/pkg/three.js";const t=5;export default`
    attribute vec3 color;
    attribute float scaleFactor;

    uniform bool sizeAttenuation;
    uniform float pointSize;

    varying vec3 vColor;

    ${o.fog_pars_vertex}

    void main() {
        vColor = color;

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        float outputPointSize = pointSize;
        if (sizeAttenuation) {
            outputPointSize = -pointSize / mvPosition.z;
        } else {
            const float PI = 3.1415926535897932384626433832795;
            const float minScale = 0.1;  // minimum scaling factor
            const float outSpeed = 2.0;  // shrink speed when zooming out
            const float outNorm = (1.0 - minScale) / atan(outSpeed);
            const float maxScale = 15.0;  // maximum scaling factor
            const float inSpeed = 0.02;  // enlarge speed when zooming in
            const float zoomOffset = 0.3;  // offset zoom pivot
            float zoom = projectionMatrix[0][0] + zoomOffset;  // zoom pivot
            float scale = zoom < 1.0 ? 1.0 + outNorm * atan(outSpeed * (zoom - 1.0)) :
                            1.0 + 2.0 / PI * (maxScale - 1.0) * atan(inSpeed * (zoom - 1.0));
            outputPointSize = pointSize * scale;
        }
        gl_PointSize = max(outputPointSize * scaleFactor, ${t.toFixed(1)});
        ${o.fog_vertex}
    }
`;

import{ShaderChunk as e}from"../../../../__snowpack__/pkg/three.js";export default`
    attribute vec2 labelPosition;
    attribute vec3 color;
    varying vec2 vUv;
    varying vec3 vColor;

    ${e.common}

    void main() {
        vUv = uv;
        vColor = color;

        vec4 vRight = vec4(modelViewMatrix[0][0], modelViewMatrix[1][0], modelViewMatrix[2][0], 0);
        vec4 vUp = vec4(modelViewMatrix[0][1], modelViewMatrix[1][1], modelViewMatrix[2][1], 0);
        vec4 vAt = -vec4(modelViewMatrix[0][2], modelViewMatrix[1][2], modelViewMatrix[2][2], 0);

        mat4 pointToCamera = mat4(vRight, vUp, vAt, vec4(0, 0, 0, 1));

        vec4 posRotated = pointToCamera * vec4(labelPosition, 0, 1);
        vec4 mvPosition = modelViewMatrix * (vec4(position, 0) + posRotated);

        gl_Position = projectionMatrix * mvPosition;
    }
`;

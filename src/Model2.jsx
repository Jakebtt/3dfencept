import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/model2.glb');
  const texture = new TextureLoader().load(textureUrl);

  useEffect(() => {
    if (materials && texture) {
      const materialNames = [
        'Material.001',
        'Material.002',
        'Material.019',
      ];

      materialNames.forEach(name => {
        if (materials[name]) {
          materials[name].map = texture;
          materials[name].needsUpdate = true;
        }
      });
    }
  }, [texture, materials]);

  return (
    <group ref={group} position={[0, -3, 0]} scale={[2, 2, 2]} dispose={null}>
      <group name="Scene">
      <mesh geometry={nodes.Spacer4.geometry} material={materials['Material.001']} position={[-0.8, -0.205, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer2.geometry} material={materials['Material.001']} position={[-0.8, -0.205, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1.geometry} material={materials['Material.001']} position={[-0.8, -0.026, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder064.geometry} material={materials['Material.019']} position={[-0.025, 2.765, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder063.geometry} material={materials['Material.019']} position={[-0.025, 2.591, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder062.geometry} material={materials['Material.019']} position={[-0.025, 2.412, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder061.geometry} material={materials['Material.019']} position={[-0.025, 2.237, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder060.geometry} material={materials['Material.019']} position={[-0.025, 2.056, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder059.geometry} material={materials['Material.019']} position={[-0.025, 1.881, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder058.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder057.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder055.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder054.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder053.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder052.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder051.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder050.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder049.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder048.geometry} material={materials['Material.019']} position={[-0.025, 2.765, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder047.geometry} material={materials['Material.019']} position={[-0.025, 2.591, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder046.geometry} material={materials['Material.019']} position={[-0.025, 2.412, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder045.geometry} material={materials['Material.019']} position={[-0.025, 2.237, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder044.geometry} material={materials['Material.019']} position={[-0.025, 2.056, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder043.geometry} material={materials['Material.019']} position={[-0.025, 1.881, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder042.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder041.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder040.geometry} material={materials['Material.019']} position={[-0.025, 1.346, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder039.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder038.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder037.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder036.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder035.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder034.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder033.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder032.geometry} material={materials['Material.019']} position={[-0.025, 2.765, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder031.geometry} material={materials['Material.019']} position={[-0.025, 2.591, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder030.geometry} material={materials['Material.019']} position={[-0.025, 2.412, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder029.geometry} material={materials['Material.019']} position={[-0.025, 2.237, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder028.geometry} material={materials['Material.019']} position={[-0.025, 2.056, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder027.geometry} material={materials['Material.019']} position={[-0.025, 1.881, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder026.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder025.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder024.geometry} material={materials['Material.019']} position={[-0.025, 1.346, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder023.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder022.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder021.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder020.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder019.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder018.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder017.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder016.geometry} material={materials['Material.019']} position={[-0.025, 2.765, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder015.geometry} material={materials['Material.019']} position={[-0.025, 2.591, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder014.geometry} material={materials['Material.019']} position={[-0.025, 2.412, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder013.geometry} material={materials['Material.019']} position={[-0.025, 2.237, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder012.geometry} material={materials['Material.019']} position={[-0.025, 2.056, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder011.geometry} material={materials['Material.019']} position={[-0.025, 1.881, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder010.geometry} material={materials['Material.019']} position={[-0.025, 1.703, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder009.geometry} material={materials['Material.019']} position={[-0.025, 1.528, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder008.geometry} material={materials['Material.019']} position={[-0.025, 1.346, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder007.geometry} material={materials['Material.019']} position={[-0.025, 1.172, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder006.geometry} material={materials['Material.019']} position={[-0.025, 0.993, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder005.geometry} material={materials['Material.019']} position={[-0.025, 0.637, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder004.geometry} material={materials['Material.019']} position={[-0.025, 0.819, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder003.geometry} material={materials['Material.019']} position={[-0.025, 0.463, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder002.geometry} material={materials['Material.019']} position={[-0.025, 0.284, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder001.geometry} material={materials['Material.019']} position={[-0.025, 0.11, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Infill008.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Infill007.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Infill006.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Infill005.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Infill004.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Infill003.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Infill002.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Infill001.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.End_Cap002_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.End_Cap002_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.End_Cap001_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.End_Cap001_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.End_Cap_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.End_Cap_2.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes['C-KESP2W6565002'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['C-KESP2W6565001'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['C-KESP2W6565'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2.geometry} material={materials['Material.001']} position={[-0.8, 0.18, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer005.geometry} material={materials['Material.001']} position={[-0.8, 0.209, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer006.geometry} material={materials['Material.001']} position={[-0.8, 0.358, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer007.geometry} material={materials['Material.001']} position={[-0.8, 0.209, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer008.geometry} material={materials['Material.001']} position={[-0.8, 0.358, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1001.geometry} material={materials['Material.001']} position={[-0.8, 0.387, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2001.geometry} material={materials['Material.001']} position={[-0.8, 0.593, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer009.geometry} material={materials['Material.001']} position={[-0.8, 0.622, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer010.geometry} material={materials['Material.001']} position={[-0.8, 0.772, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer011.geometry} material={materials['Material.001']} position={[-0.8, 0.622, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer012.geometry} material={materials['Material.001']} position={[-0.8, 0.772, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1002.geometry} material={materials['Material.001']} position={[-0.8, 0.801, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2002.geometry} material={materials['Material.001']} position={[-0.8, 1.007, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer013.geometry} material={materials['Material.001']} position={[-0.8, 1.036, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer014.geometry} material={materials['Material.001']} position={[-0.8, 1.185, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer015.geometry} material={materials['Material.001']} position={[-0.8, 1.036, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer016.geometry} material={materials['Material.001']} position={[-0.8, 1.185, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1003.geometry} material={materials['Material.001']} position={[-0.8, 1.214, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2003.geometry} material={materials['Material.001']} position={[-0.8, 1.42, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer017.geometry} material={materials['Material.001']} position={[-0.8, 1.45, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer018.geometry} material={materials['Material.001']} position={[-0.8, 1.6, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer019.geometry} material={materials['Material.001']} position={[-0.8, 1.45, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer020.geometry} material={materials['Material.001']} position={[-0.8, 1.6, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1004.geometry} material={materials['Material.001']} position={[-0.8, 1.629, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2004.geometry} material={materials['Material.001']} position={[-0.8, 1.835, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer021.geometry} material={materials['Material.001']} position={[-0.8, 1.863, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer022.geometry} material={materials['Material.001']} position={[-0.8, 2.013, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer023.geometry} material={materials['Material.001']} position={[-0.8, 1.863, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer024.geometry} material={materials['Material.001']} position={[-0.8, 2.013, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1005.geometry} material={materials['Material.001']} position={[-0.8, 2.042, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2005.geometry} material={materials['Material.001']} position={[-0.8, 2.248, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer025.geometry} material={materials['Material.001']} position={[-0.8, 2.277, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer026.geometry} material={materials['Material.001']} position={[-0.8, 2.427, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer027.geometry} material={materials['Material.001']} position={[-0.8, 2.277, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer028.geometry} material={materials['Material.001']} position={[-0.8, 2.427, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1006.geometry} material={materials['Material.001']} position={[-0.8, 2.456, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2006.geometry} material={materials['Material.001']} position={[-0.8, 2.662, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer001.geometry} material={materials['Material.001']} position={[-0.8, -0.205, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer003.geometry} material={materials['Material.001']} position={[-0.8, -0.205, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1007.geometry} material={materials['Material.001']} position={[-0.8, -0.026, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2007.geometry} material={materials['Material.001']} position={[-0.8, 0.18, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer029.geometry} material={materials['Material.001']} position={[-0.8, 0.209, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer030.geometry} material={materials['Material.001']} position={[-0.8, 0.358, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer031.geometry} material={materials['Material.001']} position={[-0.8, 0.209, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer032.geometry} material={materials['Material.001']} position={[-0.8, 0.358, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1008.geometry} material={materials['Material.001']} position={[-0.8, 0.387, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2008.geometry} material={materials['Material.001']} position={[-0.8, 0.593, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer033.geometry} material={materials['Material.001']} position={[-0.8, 0.622, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer034.geometry} material={materials['Material.001']} position={[-0.8, 0.772, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer035.geometry} material={materials['Material.001']} position={[-0.8, 0.622, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer036.geometry} material={materials['Material.001']} position={[-0.8, 0.772, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1009.geometry} material={materials['Material.001']} position={[-0.8, 0.801, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2009.geometry} material={materials['Material.001']} position={[-0.8, 1.007, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer037.geometry} material={materials['Material.001']} position={[-0.8, 1.036, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer038.geometry} material={materials['Material.001']} position={[-0.8, 1.185, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer039.geometry} material={materials['Material.001']} position={[-0.8, 1.036, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer040.geometry} material={materials['Material.001']} position={[-0.8, 1.185, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1010.geometry} material={materials['Material.001']} position={[-0.8, 1.214, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2010.geometry} material={materials['Material.001']} position={[-0.8, 1.42, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer041.geometry} material={materials['Material.001']} position={[-0.8, 1.45, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer042.geometry} material={materials['Material.001']} position={[-0.8, 1.6, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer043.geometry} material={materials['Material.001']} position={[-0.8, 1.45, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer044.geometry} material={materials['Material.001']} position={[-0.8, 1.6, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1011.geometry} material={materials['Material.001']} position={[-0.8, 1.629, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2011.geometry} material={materials['Material.001']} position={[-0.8, 1.835, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer045.geometry} material={materials['Material.001']} position={[-0.8, 1.863, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer046.geometry} material={materials['Material.001']} position={[-0.8, 2.013, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer047.geometry} material={materials['Material.001']} position={[-0.8, 1.863, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer048.geometry} material={materials['Material.001']} position={[-0.8, 2.013, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1012.geometry} material={materials['Material.001']} position={[-0.8, 2.042, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2012.geometry} material={materials['Material.001']} position={[-0.8, 2.248, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer049.geometry} material={materials['Material.001']} position={[-0.8, 2.277, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer050.geometry} material={materials['Material.001']} position={[-0.8, 2.427, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer051.geometry} material={materials['Material.001']} position={[-0.8, 2.277, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Spacer052.geometry} material={materials['Material.001']} position={[-0.8, 2.427, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2]} />
      <mesh geometry={nodes.Slat_1013.geometry} material={materials['Material.001']} position={[-0.8, 2.456, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slat_2013.geometry} material={materials['Material.001']} position={[-0.8, 2.662, 0.071]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
    </group>
  );
}

useGLTF.preload('/model2.glb')

import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/modelk.glb');
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
        <mesh name="Rusty_Screw_Cylinder058" geometry={nodes.Rusty_Screw_Cylinder058.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder057" geometry={nodes.Rusty_Screw_Cylinder057.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder055" geometry={nodes.Rusty_Screw_Cylinder055.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder054" geometry={nodes.Rusty_Screw_Cylinder054.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder053" geometry={nodes.Rusty_Screw_Cylinder053.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder052" geometry={nodes.Rusty_Screw_Cylinder052.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder051" geometry={nodes.Rusty_Screw_Cylinder051.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder050" geometry={nodes.Rusty_Screw_Cylinder050.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder049" geometry={nodes.Rusty_Screw_Cylinder049.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder042" geometry={nodes.Rusty_Screw_Cylinder042.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder041" geometry={nodes.Rusty_Screw_Cylinder041.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder040" geometry={nodes.Rusty_Screw_Cylinder040.geometry} material={materials['Material.019']} position={[-0.025, 1.346, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder039" geometry={nodes.Rusty_Screw_Cylinder039.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder038" geometry={nodes.Rusty_Screw_Cylinder038.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder037" geometry={nodes.Rusty_Screw_Cylinder037.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder036" geometry={nodes.Rusty_Screw_Cylinder036.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder035" geometry={nodes.Rusty_Screw_Cylinder035.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder034" geometry={nodes.Rusty_Screw_Cylinder034.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder033" geometry={nodes.Rusty_Screw_Cylinder033.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder026" geometry={nodes.Rusty_Screw_Cylinder026.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder025" geometry={nodes.Rusty_Screw_Cylinder025.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder024" geometry={nodes.Rusty_Screw_Cylinder024.geometry} material={materials['Material.019']} position={[-0.025, 1.346, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder023" geometry={nodes.Rusty_Screw_Cylinder023.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder022" geometry={nodes.Rusty_Screw_Cylinder022.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder021" geometry={nodes.Rusty_Screw_Cylinder021.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder020" geometry={nodes.Rusty_Screw_Cylinder020.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder019" geometry={nodes.Rusty_Screw_Cylinder019.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder018" geometry={nodes.Rusty_Screw_Cylinder018.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder017" geometry={nodes.Rusty_Screw_Cylinder017.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder010" geometry={nodes.Rusty_Screw_Cylinder010.geometry} material={materials['Material.019']} position={[-0.025, 1.703, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder009" geometry={nodes.Rusty_Screw_Cylinder009.geometry} material={materials['Material.019']} position={[-0.025, 1.528, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder008" geometry={nodes.Rusty_Screw_Cylinder008.geometry} material={materials['Material.019']} position={[-0.025, 1.346, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder007" geometry={nodes.Rusty_Screw_Cylinder007.geometry} material={materials['Material.019']} position={[-0.025, 1.172, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder006" geometry={nodes.Rusty_Screw_Cylinder006.geometry} material={materials['Material.019']} position={[-0.025, 0.993, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder005" geometry={nodes.Rusty_Screw_Cylinder005.geometry} material={materials['Material.019']} position={[-0.025, 0.637, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder004" geometry={nodes.Rusty_Screw_Cylinder004.geometry} material={materials['Material.019']} position={[-0.025, 0.819, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder003" geometry={nodes.Rusty_Screw_Cylinder003.geometry} material={materials['Material.019']} position={[-0.025, 0.463, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder002" geometry={nodes.Rusty_Screw_Cylinder002.geometry} material={materials['Material.019']} position={[-0.025, 0.284, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder001" geometry={nodes.Rusty_Screw_Cylinder001.geometry} material={materials['Material.019']} position={[-0.025, 0.11, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Infill008" geometry={nodes.Infill008.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="Infill007" geometry={nodes.Infill007.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="Infill006" geometry={nodes.Infill006.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="Infill005" geometry={nodes.Infill005.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="Infill004" geometry={nodes.Infill004.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="Infill003" geometry={nodes.Infill003.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="Infill002" geometry={nodes.Infill002.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="Infill001" geometry={nodes.Infill001.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <group name="aEnd_Cap002" position={[-0.8, -1.05, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap002" geometry={nodes.End_Cap002.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap002_1" geometry={nodes.End_Cap002_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap001" position={[-0.8, -1.05, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap001" geometry={nodes.End_Cap001.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap001_1" geometry={nodes.End_Cap001_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap" position={[-0.8, -1.05, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap" geometry={nodes.End_Cap.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap_1" geometry={nodes.End_Cap_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="C-KESP2W6565002" geometry={nodes['C-KESP2W6565002'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="C-KESP2W6565001" geometry={nodes['C-KESP2W6565001'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="C-KESP2W6565" geometry={nodes['C-KESP2W6565'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
        <mesh name="Slat_1" geometry={nodes.Slat_1.geometry} material={materials['Material.001']} position={[-0.8, -0.016, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer1" geometry={nodes.Spacer1.geometry} material={materials['Material.001']} position={[-0.8, -0.079, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer2" geometry={nodes.Spacer2.geometry} material={materials['Material.001']} position={[-0.8, -0.079, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1001" geometry={nodes.Slat_1001.geometry} material={materials['Material.001']} position={[-0.8, 0.146, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer003" geometry={nodes.Spacer003.geometry} material={materials['Material.001']} position={[-0.8, 0.083, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer004" geometry={nodes.Spacer004.geometry} material={materials['Material.001']} position={[-0.8, 0.083, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1002" geometry={nodes.Slat_1002.geometry} material={materials['Material.001']} position={[-0.8, 0.308, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer005" geometry={nodes.Spacer005.geometry} material={materials['Material.001']} position={[-0.8, 0.245, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer006" geometry={nodes.Spacer006.geometry} material={materials['Material.001']} position={[-0.8, 0.245, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1003" geometry={nodes.Slat_1003.geometry} material={materials['Material.001']} position={[-0.8, 0.47, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer007" geometry={nodes.Spacer007.geometry} material={materials['Material.001']} position={[-0.8, 0.407, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer008" geometry={nodes.Spacer008.geometry} material={materials['Material.001']} position={[-0.8, 0.407, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1004" geometry={nodes.Slat_1004.geometry} material={materials['Material.001']} position={[-0.8, 0.632, 0.065]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer009" geometry={nodes.Spacer009.geometry} material={materials['Material.001']} position={[-0.8, 0.569, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer010" geometry={nodes.Spacer010.geometry} material={materials['Material.001']} position={[-0.8, 0.569, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1005" geometry={nodes.Slat_1005.geometry} material={materials['Material.001']} position={[-0.8, 0.794, 0.065]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer011" geometry={nodes.Spacer011.geometry} material={materials['Material.001']} position={[-0.8, 0.731, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer012" geometry={nodes.Spacer012.geometry} material={materials['Material.001']} position={[-0.8, 0.731, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1006" geometry={nodes.Slat_1006.geometry} material={materials['Material.001']} position={[-0.8, 0.956, 0.065]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer013" geometry={nodes.Spacer013.geometry} material={materials['Material.001']} position={[-0.8, 0.893, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer014" geometry={nodes.Spacer014.geometry} material={materials['Material.001']} position={[-0.8, 0.893, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1007" geometry={nodes.Slat_1007.geometry} material={materials['Material.001']} position={[-0.8, 1.118, 0.065]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer015" geometry={nodes.Spacer015.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer016" geometry={nodes.Spacer016.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1008" geometry={nodes.Slat_1008.geometry} material={materials['Material.001']} position={[-0.8, 1.281, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer017" geometry={nodes.Spacer017.geometry} material={materials['Material.001']} position={[-0.8, 1.218, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer018" geometry={nodes.Spacer018.geometry} material={materials['Material.001']} position={[-0.8, 1.218, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1009" geometry={nodes.Slat_1009.geometry} material={materials['Material.001']} position={[-0.8, 1.443, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer019" geometry={nodes.Spacer019.geometry} material={materials['Material.001']} position={[-0.8, 1.38, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer020" geometry={nodes.Spacer020.geometry} material={materials['Material.001']} position={[-0.8, 1.38, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1010" geometry={nodes.Slat_1010.geometry} material={materials['Material.001']} position={[-0.8, 1.605, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer021" geometry={nodes.Spacer021.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer022" geometry={nodes.Spacer022.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer023" geometry={nodes.Spacer023.geometry} material={materials['Material.001']} position={[-0.8, 1.704, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer024" geometry={nodes.Spacer024.geometry} material={materials['Material.001']} position={[-0.8, 1.704, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer037" geometry={nodes.Spacer037.geometry} material={materials['Material.001']} position={[-0.8, -0.079, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer038" geometry={nodes.Spacer038.geometry} material={materials['Material.001']} position={[-0.8, -0.079, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer039" geometry={nodes.Spacer039.geometry} material={materials['Material.001']} position={[-0.8, 0.083, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer040" geometry={nodes.Spacer040.geometry} material={materials['Material.001']} position={[-0.8, 0.083, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer041" geometry={nodes.Spacer041.geometry} material={materials['Material.001']} position={[-0.8, 0.245, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer042" geometry={nodes.Spacer042.geometry} material={materials['Material.001']} position={[-0.8, 0.245, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer043" geometry={nodes.Spacer043.geometry} material={materials['Material.001']} position={[-0.8, 0.407, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer044" geometry={nodes.Spacer044.geometry} material={materials['Material.001']} position={[-0.8, 0.407, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer045" geometry={nodes.Spacer045.geometry} material={materials['Material.001']} position={[-0.8, 0.569, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer046" geometry={nodes.Spacer046.geometry} material={materials['Material.001']} position={[-0.8, 0.569, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer047" geometry={nodes.Spacer047.geometry} material={materials['Material.001']} position={[-0.8, 0.731, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer048" geometry={nodes.Spacer048.geometry} material={materials['Material.001']} position={[-0.8, 0.731, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer049" geometry={nodes.Spacer049.geometry} material={materials['Material.001']} position={[-0.8, 0.893, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer050" geometry={nodes.Spacer050.geometry} material={materials['Material.001']} position={[-0.8, 0.893, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer051" geometry={nodes.Spacer051.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer052" geometry={nodes.Spacer052.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer053" geometry={nodes.Spacer053.geometry} material={materials['Material.001']} position={[-0.8, 1.218, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer054" geometry={nodes.Spacer054.geometry} material={materials['Material.001']} position={[-0.8, 1.218, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer055" geometry={nodes.Spacer055.geometry} material={materials['Material.001']} position={[-0.8, 1.38, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer056" geometry={nodes.Spacer056.geometry} material={materials['Material.001']} position={[-0.8, 1.38, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer057" geometry={nodes.Spacer057.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer058" geometry={nodes.Spacer058.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer059" geometry={nodes.Spacer059.geometry} material={materials['Material.001']} position={[-0.8, 1.704, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer060" geometry={nodes.Spacer060.geometry} material={materials['Material.001']} position={[-0.8, 1.704, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1017" geometry={nodes.Slat_1017.geometry} material={materials['Material.001']} position={[-0.8, -0.016, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer073" geometry={nodes.Spacer073.geometry} material={materials['Material.001']} position={[-0.8, -0.079, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer074" geometry={nodes.Spacer074.geometry} material={materials['Material.001']} position={[-0.8, -0.079, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1018" geometry={nodes.Slat_1018.geometry} material={materials['Material.001']} position={[-0.8, 0.146, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer075" geometry={nodes.Spacer075.geometry} material={materials['Material.001']} position={[-0.8, 0.083, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer076" geometry={nodes.Spacer076.geometry} material={materials['Material.001']} position={[-0.8, 0.083, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1019" geometry={nodes.Slat_1019.geometry} material={materials['Material.001']} position={[-0.8, 0.308, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer077" geometry={nodes.Spacer077.geometry} material={materials['Material.001']} position={[-0.8, 0.245, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer078" geometry={nodes.Spacer078.geometry} material={materials['Material.001']} position={[-0.8, 0.245, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1020" geometry={nodes.Slat_1020.geometry} material={materials['Material.001']} position={[-0.8, 0.47, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer079" geometry={nodes.Spacer079.geometry} material={materials['Material.001']} position={[-0.8, 0.407, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer080" geometry={nodes.Spacer080.geometry} material={materials['Material.001']} position={[-0.8, 0.407, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1021" geometry={nodes.Slat_1021.geometry} material={materials['Material.001']} position={[-0.8, 0.632, -1.802]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer081" geometry={nodes.Spacer081.geometry} material={materials['Material.001']} position={[-0.8, 0.569, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer082" geometry={nodes.Spacer082.geometry} material={materials['Material.001']} position={[-0.8, 0.569, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1022" geometry={nodes.Slat_1022.geometry} material={materials['Material.001']} position={[-0.8, 0.794, -1.802]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer083" geometry={nodes.Spacer083.geometry} material={materials['Material.001']} position={[-0.8, 0.731, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer084" geometry={nodes.Spacer084.geometry} material={materials['Material.001']} position={[-0.8, 0.731, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1023" geometry={nodes.Slat_1023.geometry} material={materials['Material.001']} position={[-0.8, 0.956, -1.802]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer085" geometry={nodes.Spacer085.geometry} material={materials['Material.001']} position={[-0.8, 0.893, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer086" geometry={nodes.Spacer086.geometry} material={materials['Material.001']} position={[-0.8, 0.893, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1024" geometry={nodes.Slat_1024.geometry} material={materials['Material.001']} position={[-0.8, 1.118, -1.802]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer087" geometry={nodes.Spacer087.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer088" geometry={nodes.Spacer088.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1025" geometry={nodes.Slat_1025.geometry} material={materials['Material.001']} position={[-0.8, 1.281, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer089" geometry={nodes.Spacer089.geometry} material={materials['Material.001']} position={[-0.8, 1.218, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer090" geometry={nodes.Spacer090.geometry} material={materials['Material.001']} position={[-0.8, 1.218, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1026" geometry={nodes.Slat_1026.geometry} material={materials['Material.001']} position={[-0.8, 1.443, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer091" geometry={nodes.Spacer091.geometry} material={materials['Material.001']} position={[-0.8, 1.38, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer092" geometry={nodes.Spacer092.geometry} material={materials['Material.001']} position={[-0.8, 1.38, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Slat_1027" geometry={nodes.Slat_1027.geometry} material={materials['Material.001']} position={[-0.8, 1.605, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer093" geometry={nodes.Spacer093.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer094" geometry={nodes.Spacer094.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer095" geometry={nodes.Spacer095.geometry} material={materials['Material.001']} position={[-0.8, 1.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer096" geometry={nodes.Spacer096.geometry} material={materials['Material.001']} position={[-0.8, 1.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer109" geometry={nodes.Spacer109.geometry} material={materials['Material.001']} position={[-0.8, -0.079, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer110" geometry={nodes.Spacer110.geometry} material={materials['Material.001']} position={[-0.8, -0.079, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer111" geometry={nodes.Spacer111.geometry} material={materials['Material.001']} position={[-0.8, 0.083, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer112" geometry={nodes.Spacer112.geometry} material={materials['Material.001']} position={[-0.8, 0.083, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer113" geometry={nodes.Spacer113.geometry} material={materials['Material.001']} position={[-0.8, 0.245, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer114" geometry={nodes.Spacer114.geometry} material={materials['Material.001']} position={[-0.8, 0.245, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer115" geometry={nodes.Spacer115.geometry} material={materials['Material.001']} position={[-0.8, 0.407, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer116" geometry={nodes.Spacer116.geometry} material={materials['Material.001']} position={[-0.8, 0.407, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer117" geometry={nodes.Spacer117.geometry} material={materials['Material.001']} position={[-0.8, 0.569, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer118" geometry={nodes.Spacer118.geometry} material={materials['Material.001']} position={[-0.8, 0.569, -1.802]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer119" geometry={nodes.Spacer119.geometry} material={materials['Material.001']} position={[-0.8, 0.731, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer120" geometry={nodes.Spacer120.geometry} material={materials['Material.001']} position={[-0.8, 0.731, -1.802]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer121" geometry={nodes.Spacer121.geometry} material={materials['Material.001']} position={[-0.8, 0.893, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer122" geometry={nodes.Spacer122.geometry} material={materials['Material.001']} position={[-0.8, 0.893, -1.802]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer123" geometry={nodes.Spacer123.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer124" geometry={nodes.Spacer124.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.802]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer125" geometry={nodes.Spacer125.geometry} material={materials['Material.001']} position={[-0.8, 1.218, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer126" geometry={nodes.Spacer126.geometry} material={materials['Material.001']} position={[-0.8, 1.218, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer127" geometry={nodes.Spacer127.geometry} material={materials['Material.001']} position={[-0.8, 1.38, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer128" geometry={nodes.Spacer128.geometry} material={materials['Material.001']} position={[-0.8, 1.38, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer129" geometry={nodes.Spacer129.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer130" geometry={nodes.Spacer130.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer131" geometry={nodes.Spacer131.geometry} material={materials['Material.001']} position={[-0.8, 1.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
        <mesh name="Spacer132" geometry={nodes.Spacer132.geometry} material={materials['Material.001']} position={[-0.8, 1.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      </group>
    </group>
  )
}

useGLTF.preload('/modelk.glb')

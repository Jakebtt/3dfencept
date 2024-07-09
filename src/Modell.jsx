import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/modell.glb');
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
        <mesh name="Infill008" geometry={nodes.Infill008.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="Infill007" geometry={nodes.Infill007.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="Infill006" geometry={nodes.Infill006.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="Infill005" geometry={nodes.Infill005.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="Infill004" geometry={nodes.Infill004.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="Infill003" geometry={nodes.Infill003.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="Infill002" geometry={nodes.Infill002.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="Infill001" geometry={nodes.Infill001.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <group name="aEnd_Cap002" position={[-0.8, -1.071, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap002" geometry={nodes.End_Cap002.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap002_1" geometry={nodes.End_Cap002_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap001" position={[-0.8, -1.071, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap001" geometry={nodes.End_Cap001.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap001_1" geometry={nodes.End_Cap001_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap" position={[-0.8, -1.071, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap" geometry={nodes.End_Cap.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap_1" geometry={nodes.End_Cap_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="C-KESP2W6565002" geometry={nodes['C-KESP2W6565002'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="C-KESP2W6565001" geometry={nodes['C-KESP2W6565001'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="C-KESP2W6565" geometry={nodes['C-KESP2W6565'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.624]} />
        <mesh name="Slat_1" geometry={nodes.Slat_1.geometry} material={materials['Material.001']} position={[-0.8, -0.003, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer1" geometry={nodes.Spacer1.geometry} material={materials['Material.001']} position={[-0.8, -0.158, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer2" geometry={nodes.Spacer2.geometry} material={materials['Material.001']} position={[-0.8, -0.158, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1001" geometry={nodes.Slat_1001.geometry} material={materials['Material.001']} position={[-0.8, 0.172, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer003" geometry={nodes.Spacer003.geometry} material={materials['Material.001']} position={[-0.8, 0.017, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer004" geometry={nodes.Spacer004.geometry} material={materials['Material.001']} position={[-0.8, 0.017, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1002" geometry={nodes.Slat_1002.geometry} material={materials['Material.001']} position={[-0.8, 0.347, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer005" geometry={nodes.Spacer005.geometry} material={materials['Material.001']} position={[-0.8, 0.192, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer006" geometry={nodes.Spacer006.geometry} material={materials['Material.001']} position={[-0.8, 0.192, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1003" geometry={nodes.Slat_1003.geometry} material={materials['Material.001']} position={[-0.8, 0.522, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer007" geometry={nodes.Spacer007.geometry} material={materials['Material.001']} position={[-0.8, 0.367, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer008" geometry={nodes.Spacer008.geometry} material={materials['Material.001']} position={[-0.8, 0.367, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1004" geometry={nodes.Slat_1004.geometry} material={materials['Material.001']} position={[-0.8, 0.697, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer009" geometry={nodes.Spacer009.geometry} material={materials['Material.001']} position={[-0.8, 0.542, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer010" geometry={nodes.Spacer010.geometry} material={materials['Material.001']} position={[-0.8, 0.542, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1005" geometry={nodes.Slat_1005.geometry} material={materials['Material.001']} position={[-0.8, 0.872, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer011" geometry={nodes.Spacer011.geometry} material={materials['Material.001']} position={[-0.8, 0.717, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer012" geometry={nodes.Spacer012.geometry} material={materials['Material.001']} position={[-0.8, 0.717, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1006" geometry={nodes.Slat_1006.geometry} material={materials['Material.001']} position={[-0.8, 1.047, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer013" geometry={nodes.Spacer013.geometry} material={materials['Material.001']} position={[-0.8, 0.892, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer014" geometry={nodes.Spacer014.geometry} material={materials['Material.001']} position={[-0.8, 0.892, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1007" geometry={nodes.Slat_1007.geometry} material={materials['Material.001']} position={[-0.8, 1.222, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer015" geometry={nodes.Spacer015.geometry} material={materials['Material.001']} position={[-0.8, 1.067, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer016" geometry={nodes.Spacer016.geometry} material={materials['Material.001']} position={[-0.8, 1.067, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1008" geometry={nodes.Slat_1008.geometry} material={materials['Material.001']} position={[-0.8, 1.397, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer017" geometry={nodes.Spacer017.geometry} material={materials['Material.001']} position={[-0.8, 1.242, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer018" geometry={nodes.Spacer018.geometry} material={materials['Material.001']} position={[-0.8, 1.242, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1009" geometry={nodes.Slat_1009.geometry} material={materials['Material.001']} position={[-0.8, 1.572, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer019" geometry={nodes.Spacer019.geometry} material={materials['Material.001']} position={[-0.8, 1.417, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer020" geometry={nodes.Spacer020.geometry} material={materials['Material.001']} position={[-0.8, 1.417, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer021" geometry={nodes.Spacer021.geometry} material={materials['Material.001']} position={[-0.8, 1.592, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer022" geometry={nodes.Spacer022.geometry} material={materials['Material.001']} position={[-0.8, 1.592, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1016" geometry={nodes.Slat_1016.geometry} material={materials['Material.001']} position={[-0.8, -0.003, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer035" geometry={nodes.Spacer035.geometry} material={materials['Material.001']} position={[-0.8, -0.158, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer036" geometry={nodes.Spacer036.geometry} material={materials['Material.001']} position={[-0.8, -0.158, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1017" geometry={nodes.Slat_1017.geometry} material={materials['Material.001']} position={[-0.8, 0.172, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer037" geometry={nodes.Spacer037.geometry} material={materials['Material.001']} position={[-0.8, 0.017, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer038" geometry={nodes.Spacer038.geometry} material={materials['Material.001']} position={[-0.8, 0.017, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1018" geometry={nodes.Slat_1018.geometry} material={materials['Material.001']} position={[-0.8, 0.347, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer039" geometry={nodes.Spacer039.geometry} material={materials['Material.001']} position={[-0.8, 0.192, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer040" geometry={nodes.Spacer040.geometry} material={materials['Material.001']} position={[-0.8, 0.192, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1019" geometry={nodes.Slat_1019.geometry} material={materials['Material.001']} position={[-0.8, 0.522, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer041" geometry={nodes.Spacer041.geometry} material={materials['Material.001']} position={[-0.8, 0.367, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer042" geometry={nodes.Spacer042.geometry} material={materials['Material.001']} position={[-0.8, 0.367, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1020" geometry={nodes.Slat_1020.geometry} material={materials['Material.001']} position={[-0.8, 0.697, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer043" geometry={nodes.Spacer043.geometry} material={materials['Material.001']} position={[-0.8, 0.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer044" geometry={nodes.Spacer044.geometry} material={materials['Material.001']} position={[-0.8, 0.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1021" geometry={nodes.Slat_1021.geometry} material={materials['Material.001']} position={[-0.8, 0.872, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer045" geometry={nodes.Spacer045.geometry} material={materials['Material.001']} position={[-0.8, 0.717, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer046" geometry={nodes.Spacer046.geometry} material={materials['Material.001']} position={[-0.8, 0.717, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1022" geometry={nodes.Slat_1022.geometry} material={materials['Material.001']} position={[-0.8, 1.047, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer047" geometry={nodes.Spacer047.geometry} material={materials['Material.001']} position={[-0.8, 0.892, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer048" geometry={nodes.Spacer048.geometry} material={materials['Material.001']} position={[-0.8, 0.892, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1023" geometry={nodes.Slat_1023.geometry} material={materials['Material.001']} position={[-0.8, 1.222, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer049" geometry={nodes.Spacer049.geometry} material={materials['Material.001']} position={[-0.8, 1.067, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer050" geometry={nodes.Spacer050.geometry} material={materials['Material.001']} position={[-0.8, 1.067, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1024" geometry={nodes.Slat_1024.geometry} material={materials['Material.001']} position={[-0.8, 1.397, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer051" geometry={nodes.Spacer051.geometry} material={materials['Material.001']} position={[-0.8, 1.242, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer052" geometry={nodes.Spacer052.geometry} material={materials['Material.001']} position={[-0.8, 1.242, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1025" geometry={nodes.Slat_1025.geometry} material={materials['Material.001']} position={[-0.8, 1.572, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer053" geometry={nodes.Spacer053.geometry} material={materials['Material.001']} position={[-0.8, 1.417, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer054" geometry={nodes.Spacer054.geometry} material={materials['Material.001']} position={[-0.8, 1.417, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer055" geometry={nodes.Spacer055.geometry} material={materials['Material.001']} position={[-0.8, 1.592, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer056" geometry={nodes.Spacer056.geometry} material={materials['Material.001']} position={[-0.8, 1.592, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
      </group>
    </group>
  )
}

useGLTF.preload('/modell.glb')

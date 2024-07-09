import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/modela.glb');
  const texture = new TextureLoader().load(textureUrl);

  useEffect(() => {
    if (materials && texture) {
      const materialNames = [
        'Material.001',
        'Material.002',
        'Material.004',
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
        <mesh name="Infill008" geometry={nodes.Infill008.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="Infill007" geometry={nodes.Infill007.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="Infill006" geometry={nodes.Infill006.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="Infill005" geometry={nodes.Infill005.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="Infill004" geometry={nodes.Infill004.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="Infill003" geometry={nodes.Infill003.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="Infill002" geometry={nodes.Infill002.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="Infill001" geometry={nodes.Infill001.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <group name="aEnd_Cap002" position={[-0.8, -1.048, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap002" geometry={nodes.End_Cap002.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap002_1" geometry={nodes.End_Cap002_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap001" position={[-0.8, -1.048, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap001" geometry={nodes.End_Cap001.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap001_1" geometry={nodes.End_Cap001_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap" position={[-0.8, -1.048, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap" geometry={nodes.End_Cap.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap_1" geometry={nodes.End_Cap_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="C-KESP2W6565002" geometry={nodes['C-KESP2W6565002'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="C-KESP2W6565001" geometry={nodes['C-KESP2W6565001'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="C-KESP2W6565" geometry={nodes['C-KESP2W6565'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.632]} />
        <mesh name="Spacer1" geometry={nodes.Spacer1.geometry} material={materials['Material.001']} position={[-0.8, -0.039, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer2" geometry={nodes.Spacer2.geometry} material={materials['Material.001']} position={[-0.8, -0.039, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1002" geometry={nodes.Slat_1002.geometry} material={materials['Material.004']} position={[-0.8, -0.001, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer003" geometry={nodes.Spacer003.geometry} material={materials['Material.001']} position={[-0.8, 0.004, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer004" geometry={nodes.Spacer004.geometry} material={materials['Material.001']} position={[-0.8, 0.004, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1001" geometry={nodes.Slat_1001.geometry} material={materials['Material.004']} position={[-0.8, 0.043, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer005" geometry={nodes.Spacer005.geometry} material={materials['Material.001']} position={[-0.8, 0.048, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer006" geometry={nodes.Spacer006.geometry} material={materials['Material.001']} position={[-0.8, 0.048, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1003" geometry={nodes.Slat_1003.geometry} material={materials['Material.004']} position={[-0.8, 0.087, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer007" geometry={nodes.Spacer007.geometry} material={materials['Material.001']} position={[-0.8, 0.092, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer008" geometry={nodes.Spacer008.geometry} material={materials['Material.001']} position={[-0.8, 0.092, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1004" geometry={nodes.Slat_1004.geometry} material={materials['Material.004']} position={[-0.8, 0.131, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer009" geometry={nodes.Spacer009.geometry} material={materials['Material.001']} position={[-0.8, 0.135, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer010" geometry={nodes.Spacer010.geometry} material={materials['Material.001']} position={[-0.8, 0.135, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1005" geometry={nodes.Slat_1005.geometry} material={materials['Material.004']} position={[-0.8, 0.174, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer011" geometry={nodes.Spacer011.geometry} material={materials['Material.001']} position={[-0.8, 0.179, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer012" geometry={nodes.Spacer012.geometry} material={materials['Material.001']} position={[-0.8, 0.179, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1006" geometry={nodes.Slat_1006.geometry} material={materials['Material.004']} position={[-0.8, 0.218, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer013" geometry={nodes.Spacer013.geometry} material={materials['Material.001']} position={[-0.8, 0.223, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer014" geometry={nodes.Spacer014.geometry} material={materials['Material.001']} position={[-0.8, 0.223, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1007" geometry={nodes.Slat_1007.geometry} material={materials['Material.004']} position={[-0.8, 0.262, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer015" geometry={nodes.Spacer015.geometry} material={materials['Material.001']} position={[-0.8, 0.267, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer016" geometry={nodes.Spacer016.geometry} material={materials['Material.001']} position={[-0.8, 0.267, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1008" geometry={nodes.Slat_1008.geometry} material={materials['Material.004']} position={[-0.8, 0.305, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer017" geometry={nodes.Spacer017.geometry} material={materials['Material.001']} position={[-0.8, 0.311, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer018" geometry={nodes.Spacer018.geometry} material={materials['Material.001']} position={[-0.8, 0.311, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1009" geometry={nodes.Slat_1009.geometry} material={materials['Material.004']} position={[-0.8, 0.349, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer019" geometry={nodes.Spacer019.geometry} material={materials['Material.001']} position={[-0.8, 0.354, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer020" geometry={nodes.Spacer020.geometry} material={materials['Material.001']} position={[-0.8, 0.354, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1010" geometry={nodes.Slat_1010.geometry} material={materials['Material.004']} position={[-0.8, 0.393, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer021" geometry={nodes.Spacer021.geometry} material={materials['Material.001']} position={[-0.8, 0.398, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer022" geometry={nodes.Spacer022.geometry} material={materials['Material.001']} position={[-0.8, 0.398, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1011" geometry={nodes.Slat_1011.geometry} material={materials['Material.004']} position={[-0.8, 0.437, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer023" geometry={nodes.Spacer023.geometry} material={materials['Material.001']} position={[-0.8, 0.442, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer024" geometry={nodes.Spacer024.geometry} material={materials['Material.001']} position={[-0.8, 0.442, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1012" geometry={nodes.Slat_1012.geometry} material={materials['Material.004']} position={[-0.8, 0.481, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer025" geometry={nodes.Spacer025.geometry} material={materials['Material.001']} position={[-0.8, 0.485, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer026" geometry={nodes.Spacer026.geometry} material={materials['Material.001']} position={[-0.8, 0.485, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1013" geometry={nodes.Slat_1013.geometry} material={materials['Material.004']} position={[-0.8, 0.524, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer027" geometry={nodes.Spacer027.geometry} material={materials['Material.001']} position={[-0.8, 0.529, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer028" geometry={nodes.Spacer028.geometry} material={materials['Material.001']} position={[-0.8, 0.529, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1014" geometry={nodes.Slat_1014.geometry} material={materials['Material.004']} position={[-0.8, 0.568, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer029" geometry={nodes.Spacer029.geometry} material={materials['Material.001']} position={[-0.8, 0.573, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer030" geometry={nodes.Spacer030.geometry} material={materials['Material.001']} position={[-0.8, 0.573, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1015" geometry={nodes.Slat_1015.geometry} material={materials['Material.004']} position={[-0.8, 0.612, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer031" geometry={nodes.Spacer031.geometry} material={materials['Material.001']} position={[-0.8, 0.617, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer032" geometry={nodes.Spacer032.geometry} material={materials['Material.001']} position={[-0.8, 0.617, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1016" geometry={nodes.Slat_1016.geometry} material={materials['Material.004']} position={[-0.8, 0.655, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer033" geometry={nodes.Spacer033.geometry} material={materials['Material.001']} position={[-0.8, 0.661, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer034" geometry={nodes.Spacer034.geometry} material={materials['Material.001']} position={[-0.8, 0.661, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1017" geometry={nodes.Slat_1017.geometry} material={materials['Material.004']} position={[-0.8, 0.699, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer035" geometry={nodes.Spacer035.geometry} material={materials['Material.001']} position={[-0.8, 0.704, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer036" geometry={nodes.Spacer036.geometry} material={materials['Material.001']} position={[-0.8, 0.704, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1018" geometry={nodes.Slat_1018.geometry} material={materials['Material.004']} position={[-0.8, 0.743, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer037" geometry={nodes.Spacer037.geometry} material={materials['Material.001']} position={[-0.8, 0.748, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer038" geometry={nodes.Spacer038.geometry} material={materials['Material.001']} position={[-0.8, 0.748, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1019" geometry={nodes.Slat_1019.geometry} material={materials['Material.004']} position={[-0.8, 0.787, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer039" geometry={nodes.Spacer039.geometry} material={materials['Material.001']} position={[-0.8, 0.792, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer040" geometry={nodes.Spacer040.geometry} material={materials['Material.001']} position={[-0.8, 0.792, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1020" geometry={nodes.Slat_1020.geometry} material={materials['Material.004']} position={[-0.8, 0.831, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer041" geometry={nodes.Spacer041.geometry} material={materials['Material.001']} position={[-0.8, 0.835, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer042" geometry={nodes.Spacer042.geometry} material={materials['Material.001']} position={[-0.8, 0.835, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1021" geometry={nodes.Slat_1021.geometry} material={materials['Material.004']} position={[-0.8, 0.874, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer043" geometry={nodes.Spacer043.geometry} material={materials['Material.001']} position={[-0.8, 0.879, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer044" geometry={nodes.Spacer044.geometry} material={materials['Material.001']} position={[-0.8, 0.879, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1022" geometry={nodes.Slat_1022.geometry} material={materials['Material.004']} position={[-0.8, 0.918, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer045" geometry={nodes.Spacer045.geometry} material={materials['Material.001']} position={[-0.8, 0.923, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer046" geometry={nodes.Spacer046.geometry} material={materials['Material.001']} position={[-0.8, 0.923, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1023" geometry={nodes.Slat_1023.geometry} material={materials['Material.004']} position={[-0.8, 0.962, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer047" geometry={nodes.Spacer047.geometry} material={materials['Material.001']} position={[-0.8, 0.967, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer048" geometry={nodes.Spacer048.geometry} material={materials['Material.001']} position={[-0.8, 0.967, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1024" geometry={nodes.Slat_1024.geometry} material={materials['Material.004']} position={[-0.8, 1.005, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer049" geometry={nodes.Spacer049.geometry} material={materials['Material.001']} position={[-0.8, 1.011, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer050" geometry={nodes.Spacer050.geometry} material={materials['Material.001']} position={[-0.8, 1.011, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1025" geometry={nodes.Slat_1025.geometry} material={materials['Material.004']} position={[-0.8, 1.049, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer051" geometry={nodes.Spacer051.geometry} material={materials['Material.001']} position={[-0.8, 1.054, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer052" geometry={nodes.Spacer052.geometry} material={materials['Material.001']} position={[-0.8, 1.054, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1026" geometry={nodes.Slat_1026.geometry} material={materials['Material.004']} position={[-0.8, 1.093, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer053" geometry={nodes.Spacer053.geometry} material={materials['Material.001']} position={[-0.8, 1.098, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer054" geometry={nodes.Spacer054.geometry} material={materials['Material.001']} position={[-0.8, 1.098, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1027" geometry={nodes.Slat_1027.geometry} material={materials['Material.004']} position={[-0.8, 1.137, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer055" geometry={nodes.Spacer055.geometry} material={materials['Material.001']} position={[-0.8, 1.142, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer056" geometry={nodes.Spacer056.geometry} material={materials['Material.001']} position={[-0.8, 1.142, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1028" geometry={nodes.Slat_1028.geometry} material={materials['Material.004']} position={[-0.8, 1.181, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer057" geometry={nodes.Spacer057.geometry} material={materials['Material.001']} position={[-0.8, 1.185, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer058" geometry={nodes.Spacer058.geometry} material={materials['Material.001']} position={[-0.8, 1.185, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1029" geometry={nodes.Slat_1029.geometry} material={materials['Material.004']} position={[-0.8, 1.224, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer059" geometry={nodes.Spacer059.geometry} material={materials['Material.001']} position={[-0.8, 1.229, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer060" geometry={nodes.Spacer060.geometry} material={materials['Material.001']} position={[-0.8, 1.229, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1030" geometry={nodes.Slat_1030.geometry} material={materials['Material.004']} position={[-0.8, 1.268, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer061" geometry={nodes.Spacer061.geometry} material={materials['Material.001']} position={[-0.8, 1.273, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer062" geometry={nodes.Spacer062.geometry} material={materials['Material.001']} position={[-0.8, 1.273, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1031" geometry={nodes.Slat_1031.geometry} material={materials['Material.004']} position={[-0.8, 1.312, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer063" geometry={nodes.Spacer063.geometry} material={materials['Material.001']} position={[-0.8, 1.317, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer064" geometry={nodes.Spacer064.geometry} material={materials['Material.001']} position={[-0.8, 1.317, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1032" geometry={nodes.Slat_1032.geometry} material={materials['Material.004']} position={[-0.8, 1.355, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer065" geometry={nodes.Spacer065.geometry} material={materials['Material.001']} position={[-0.8, 1.361, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer066" geometry={nodes.Spacer066.geometry} material={materials['Material.001']} position={[-0.8, 1.361, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1033" geometry={nodes.Slat_1033.geometry} material={materials['Material.004']} position={[-0.8, 1.399, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer067" geometry={nodes.Spacer067.geometry} material={materials['Material.001']} position={[-0.8, 1.404, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer068" geometry={nodes.Spacer068.geometry} material={materials['Material.001']} position={[-0.8, 1.404, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1034" geometry={nodes.Slat_1034.geometry} material={materials['Material.004']} position={[-0.8, 1.443, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer069" geometry={nodes.Spacer069.geometry} material={materials['Material.001']} position={[-0.8, 1.448, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer070" geometry={nodes.Spacer070.geometry} material={materials['Material.001']} position={[-0.8, 1.448, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1035" geometry={nodes.Slat_1035.geometry} material={materials['Material.004']} position={[-0.8, 1.487, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer071" geometry={nodes.Spacer071.geometry} material={materials['Material.001']} position={[-0.8, 1.492, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer072" geometry={nodes.Spacer072.geometry} material={materials['Material.001']} position={[-0.8, 1.492, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1036" geometry={nodes.Slat_1036.geometry} material={materials['Material.004']} position={[-0.8, 1.531, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer073" geometry={nodes.Spacer073.geometry} material={materials['Material.001']} position={[-0.8, 1.535, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer074" geometry={nodes.Spacer074.geometry} material={materials['Material.001']} position={[-0.8, 1.535, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1037" geometry={nodes.Slat_1037.geometry} material={materials['Material.004']} position={[-0.8, 1.574, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer075" geometry={nodes.Spacer075.geometry} material={materials['Material.001']} position={[-0.8, 1.579, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer076" geometry={nodes.Spacer076.geometry} material={materials['Material.001']} position={[-0.8, 1.579, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1038" geometry={nodes.Slat_1038.geometry} material={materials['Material.004']} position={[-0.8, 1.618, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer077" geometry={nodes.Spacer077.geometry} material={materials['Material.001']} position={[-0.8, 1.623, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer078" geometry={nodes.Spacer078.geometry} material={materials['Material.001']} position={[-0.8, 1.623, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1039" geometry={nodes.Slat_1039.geometry} material={materials['Material.004']} position={[-0.8, 1.662, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer079" geometry={nodes.Spacer079.geometry} material={materials['Material.001']} position={[-0.8, 1.667, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer080" geometry={nodes.Spacer080.geometry} material={materials['Material.001']} position={[-0.8, 1.667, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1040" geometry={nodes.Slat_1040.geometry} material={materials['Material.004']} position={[-0.8, 1.705, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer081" geometry={nodes.Spacer081.geometry} material={materials['Material.001']} position={[-0.8, 1.711, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer082" geometry={nodes.Spacer082.geometry} material={materials['Material.001']} position={[-0.8, 1.711, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1041" geometry={nodes.Slat_1041.geometry} material={materials['Material.004']} position={[-0.8, 1.749, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer083" geometry={nodes.Spacer083.geometry} material={materials['Material.001']} position={[-0.8, 1.754, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer084" geometry={nodes.Spacer084.geometry} material={materials['Material.001']} position={[-0.8, 1.754, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer133" geometry={nodes.Spacer133.geometry} material={materials['Material.001']} position={[-0.8, -0.039, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer134" geometry={nodes.Spacer134.geometry} material={materials['Material.001']} position={[-0.8, -0.039, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1066" geometry={nodes.Slat_1066.geometry} material={materials['Material.004']} position={[-0.8, -0.001, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer135" geometry={nodes.Spacer135.geometry} material={materials['Material.001']} position={[-0.8, 0.004, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer136" geometry={nodes.Spacer136.geometry} material={materials['Material.001']} position={[-0.8, 0.004, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1067" geometry={nodes.Slat_1067.geometry} material={materials['Material.004']} position={[-0.8, 0.043, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer137" geometry={nodes.Spacer137.geometry} material={materials['Material.001']} position={[-0.8, 0.048, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer138" geometry={nodes.Spacer138.geometry} material={materials['Material.001']} position={[-0.8, 0.048, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1068" geometry={nodes.Slat_1068.geometry} material={materials['Material.004']} position={[-0.8, 0.087, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer139" geometry={nodes.Spacer139.geometry} material={materials['Material.001']} position={[-0.8, 0.092, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer140" geometry={nodes.Spacer140.geometry} material={materials['Material.001']} position={[-0.8, 0.092, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1069" geometry={nodes.Slat_1069.geometry} material={materials['Material.004']} position={[-0.8, 0.131, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer141" geometry={nodes.Spacer141.geometry} material={materials['Material.001']} position={[-0.8, 0.135, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer142" geometry={nodes.Spacer142.geometry} material={materials['Material.001']} position={[-0.8, 0.135, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1070" geometry={nodes.Slat_1070.geometry} material={materials['Material.004']} position={[-0.8, 0.174, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer143" geometry={nodes.Spacer143.geometry} material={materials['Material.001']} position={[-0.8, 0.179, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer144" geometry={nodes.Spacer144.geometry} material={materials['Material.001']} position={[-0.8, 0.179, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1071" geometry={nodes.Slat_1071.geometry} material={materials['Material.004']} position={[-0.8, 0.218, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer145" geometry={nodes.Spacer145.geometry} material={materials['Material.001']} position={[-0.8, 0.223, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer146" geometry={nodes.Spacer146.geometry} material={materials['Material.001']} position={[-0.8, 0.223, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1072" geometry={nodes.Slat_1072.geometry} material={materials['Material.004']} position={[-0.8, 0.262, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer147" geometry={nodes.Spacer147.geometry} material={materials['Material.001']} position={[-0.8, 0.267, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer148" geometry={nodes.Spacer148.geometry} material={materials['Material.001']} position={[-0.8, 0.267, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1073" geometry={nodes.Slat_1073.geometry} material={materials['Material.004']} position={[-0.8, 0.305, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer149" geometry={nodes.Spacer149.geometry} material={materials['Material.001']} position={[-0.8, 0.311, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer150" geometry={nodes.Spacer150.geometry} material={materials['Material.001']} position={[-0.8, 0.311, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1074" geometry={nodes.Slat_1074.geometry} material={materials['Material.004']} position={[-0.8, 0.349, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer151" geometry={nodes.Spacer151.geometry} material={materials['Material.001']} position={[-0.8, 0.354, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer152" geometry={nodes.Spacer152.geometry} material={materials['Material.001']} position={[-0.8, 0.354, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1075" geometry={nodes.Slat_1075.geometry} material={materials['Material.004']} position={[-0.8, 0.393, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer153" geometry={nodes.Spacer153.geometry} material={materials['Material.001']} position={[-0.8, 0.398, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer154" geometry={nodes.Spacer154.geometry} material={materials['Material.001']} position={[-0.8, 0.398, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1076" geometry={nodes.Slat_1076.geometry} material={materials['Material.004']} position={[-0.8, 0.437, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer155" geometry={nodes.Spacer155.geometry} material={materials['Material.001']} position={[-0.8, 0.442, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer156" geometry={nodes.Spacer156.geometry} material={materials['Material.001']} position={[-0.8, 0.442, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1077" geometry={nodes.Slat_1077.geometry} material={materials['Material.004']} position={[-0.8, 0.481, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer157" geometry={nodes.Spacer157.geometry} material={materials['Material.001']} position={[-0.8, 0.485, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer158" geometry={nodes.Spacer158.geometry} material={materials['Material.001']} position={[-0.8, 0.485, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1078" geometry={nodes.Slat_1078.geometry} material={materials['Material.004']} position={[-0.8, 0.524, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer159" geometry={nodes.Spacer159.geometry} material={materials['Material.001']} position={[-0.8, 0.529, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer160" geometry={nodes.Spacer160.geometry} material={materials['Material.001']} position={[-0.8, 0.529, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1079" geometry={nodes.Slat_1079.geometry} material={materials['Material.004']} position={[-0.8, 0.568, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer161" geometry={nodes.Spacer161.geometry} material={materials['Material.001']} position={[-0.8, 0.573, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer162" geometry={nodes.Spacer162.geometry} material={materials['Material.001']} position={[-0.8, 0.573, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1080" geometry={nodes.Slat_1080.geometry} material={materials['Material.004']} position={[-0.8, 0.612, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer163" geometry={nodes.Spacer163.geometry} material={materials['Material.001']} position={[-0.8, 0.617, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer164" geometry={nodes.Spacer164.geometry} material={materials['Material.001']} position={[-0.8, 0.617, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1081" geometry={nodes.Slat_1081.geometry} material={materials['Material.004']} position={[-0.8, 0.655, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer165" geometry={nodes.Spacer165.geometry} material={materials['Material.001']} position={[-0.8, 0.661, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer166" geometry={nodes.Spacer166.geometry} material={materials['Material.001']} position={[-0.8, 0.661, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1082" geometry={nodes.Slat_1082.geometry} material={materials['Material.004']} position={[-0.8, 0.699, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer167" geometry={nodes.Spacer167.geometry} material={materials['Material.001']} position={[-0.8, 0.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer168" geometry={nodes.Spacer168.geometry} material={materials['Material.001']} position={[-0.8, 0.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1083" geometry={nodes.Slat_1083.geometry} material={materials['Material.004']} position={[-0.8, 0.743, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer169" geometry={nodes.Spacer169.geometry} material={materials['Material.001']} position={[-0.8, 0.748, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer170" geometry={nodes.Spacer170.geometry} material={materials['Material.001']} position={[-0.8, 0.748, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1084" geometry={nodes.Slat_1084.geometry} material={materials['Material.004']} position={[-0.8, 0.787, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer171" geometry={nodes.Spacer171.geometry} material={materials['Material.001']} position={[-0.8, 0.792, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer172" geometry={nodes.Spacer172.geometry} material={materials['Material.001']} position={[-0.8, 0.792, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1085" geometry={nodes.Slat_1085.geometry} material={materials['Material.004']} position={[-0.8, 0.831, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer173" geometry={nodes.Spacer173.geometry} material={materials['Material.001']} position={[-0.8, 0.835, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer174" geometry={nodes.Spacer174.geometry} material={materials['Material.001']} position={[-0.8, 0.835, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1086" geometry={nodes.Slat_1086.geometry} material={materials['Material.004']} position={[-0.8, 0.874, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer175" geometry={nodes.Spacer175.geometry} material={materials['Material.001']} position={[-0.8, 0.879, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer176" geometry={nodes.Spacer176.geometry} material={materials['Material.001']} position={[-0.8, 0.879, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1087" geometry={nodes.Slat_1087.geometry} material={materials['Material.004']} position={[-0.8, 0.918, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer177" geometry={nodes.Spacer177.geometry} material={materials['Material.001']} position={[-0.8, 0.923, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer178" geometry={nodes.Spacer178.geometry} material={materials['Material.001']} position={[-0.8, 0.923, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1088" geometry={nodes.Slat_1088.geometry} material={materials['Material.004']} position={[-0.8, 0.962, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer179" geometry={nodes.Spacer179.geometry} material={materials['Material.001']} position={[-0.8, 0.967, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer180" geometry={nodes.Spacer180.geometry} material={materials['Material.001']} position={[-0.8, 0.967, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1089" geometry={nodes.Slat_1089.geometry} material={materials['Material.004']} position={[-0.8, 1.005, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer181" geometry={nodes.Spacer181.geometry} material={materials['Material.001']} position={[-0.8, 1.011, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer182" geometry={nodes.Spacer182.geometry} material={materials['Material.001']} position={[-0.8, 1.011, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1090" geometry={nodes.Slat_1090.geometry} material={materials['Material.004']} position={[-0.8, 1.049, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer183" geometry={nodes.Spacer183.geometry} material={materials['Material.001']} position={[-0.8, 1.054, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer184" geometry={nodes.Spacer184.geometry} material={materials['Material.001']} position={[-0.8, 1.054, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1091" geometry={nodes.Slat_1091.geometry} material={materials['Material.004']} position={[-0.8, 1.093, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer185" geometry={nodes.Spacer185.geometry} material={materials['Material.001']} position={[-0.8, 1.098, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer186" geometry={nodes.Spacer186.geometry} material={materials['Material.001']} position={[-0.8, 1.098, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1092" geometry={nodes.Slat_1092.geometry} material={materials['Material.004']} position={[-0.8, 1.137, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer187" geometry={nodes.Spacer187.geometry} material={materials['Material.001']} position={[-0.8, 1.142, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer188" geometry={nodes.Spacer188.geometry} material={materials['Material.001']} position={[-0.8, 1.142, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1093" geometry={nodes.Slat_1093.geometry} material={materials['Material.004']} position={[-0.8, 1.181, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer189" geometry={nodes.Spacer189.geometry} material={materials['Material.001']} position={[-0.8, 1.185, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer190" geometry={nodes.Spacer190.geometry} material={materials['Material.001']} position={[-0.8, 1.185, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1094" geometry={nodes.Slat_1094.geometry} material={materials['Material.004']} position={[-0.8, 1.224, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer191" geometry={nodes.Spacer191.geometry} material={materials['Material.001']} position={[-0.8, 1.229, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer192" geometry={nodes.Spacer192.geometry} material={materials['Material.001']} position={[-0.8, 1.229, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1095" geometry={nodes.Slat_1095.geometry} material={materials['Material.004']} position={[-0.8, 1.268, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer193" geometry={nodes.Spacer193.geometry} material={materials['Material.001']} position={[-0.8, 1.273, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer194" geometry={nodes.Spacer194.geometry} material={materials['Material.001']} position={[-0.8, 1.273, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1096" geometry={nodes.Slat_1096.geometry} material={materials['Material.004']} position={[-0.8, 1.312, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer195" geometry={nodes.Spacer195.geometry} material={materials['Material.001']} position={[-0.8, 1.317, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer196" geometry={nodes.Spacer196.geometry} material={materials['Material.001']} position={[-0.8, 1.317, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1097" geometry={nodes.Slat_1097.geometry} material={materials['Material.004']} position={[-0.8, 1.355, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer197" geometry={nodes.Spacer197.geometry} material={materials['Material.001']} position={[-0.8, 1.361, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer198" geometry={nodes.Spacer198.geometry} material={materials['Material.001']} position={[-0.8, 1.361, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1098" geometry={nodes.Slat_1098.geometry} material={materials['Material.004']} position={[-0.8, 1.399, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer199" geometry={nodes.Spacer199.geometry} material={materials['Material.001']} position={[-0.8, 1.404, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer200" geometry={nodes.Spacer200.geometry} material={materials['Material.001']} position={[-0.8, 1.404, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1099" geometry={nodes.Slat_1099.geometry} material={materials['Material.004']} position={[-0.8, 1.443, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer201" geometry={nodes.Spacer201.geometry} material={materials['Material.001']} position={[-0.8, 1.448, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer202" geometry={nodes.Spacer202.geometry} material={materials['Material.001']} position={[-0.8, 1.448, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1100" geometry={nodes.Slat_1100.geometry} material={materials['Material.004']} position={[-0.8, 1.487, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer203" geometry={nodes.Spacer203.geometry} material={materials['Material.001']} position={[-0.8, 1.492, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer204" geometry={nodes.Spacer204.geometry} material={materials['Material.001']} position={[-0.8, 1.492, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1101" geometry={nodes.Slat_1101.geometry} material={materials['Material.004']} position={[-0.8, 1.531, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer205" geometry={nodes.Spacer205.geometry} material={materials['Material.001']} position={[-0.8, 1.535, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer206" geometry={nodes.Spacer206.geometry} material={materials['Material.001']} position={[-0.8, 1.535, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1102" geometry={nodes.Slat_1102.geometry} material={materials['Material.004']} position={[-0.8, 1.574, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer207" geometry={nodes.Spacer207.geometry} material={materials['Material.001']} position={[-0.8, 1.579, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer208" geometry={nodes.Spacer208.geometry} material={materials['Material.001']} position={[-0.8, 1.579, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1103" geometry={nodes.Slat_1103.geometry} material={materials['Material.004']} position={[-0.8, 1.618, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer209" geometry={nodes.Spacer209.geometry} material={materials['Material.001']} position={[-0.8, 1.623, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer210" geometry={nodes.Spacer210.geometry} material={materials['Material.001']} position={[-0.8, 1.623, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1104" geometry={nodes.Slat_1104.geometry} material={materials['Material.004']} position={[-0.8, 1.662, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer211" geometry={nodes.Spacer211.geometry} material={materials['Material.001']} position={[-0.8, 1.667, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer212" geometry={nodes.Spacer212.geometry} material={materials['Material.001']} position={[-0.8, 1.667, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1105" geometry={nodes.Slat_1105.geometry} material={materials['Material.004']} position={[-0.8, 1.705, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer213" geometry={nodes.Spacer213.geometry} material={materials['Material.001']} position={[-0.8, 1.711, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer214" geometry={nodes.Spacer214.geometry} material={materials['Material.001']} position={[-0.8, 1.711, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1106" geometry={nodes.Slat_1106.geometry} material={materials['Material.004']} position={[-0.8, 1.749, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.25]} />
        <mesh name="Spacer215" geometry={nodes.Spacer215.geometry} material={materials['Material.001']} position={[-0.8, 1.754, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer216" geometry={nodes.Spacer216.geometry} material={materials['Material.001']} position={[-0.8, 1.754, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      </group>
    </group>
  )
}

useGLTF.preload('/modela.glb')

import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/modeltest.glb');
  const texture = new TextureLoader().load(textureUrl);

  useEffect(() => {
    if (materials && texture) {
      const materialNames = [
        'Material.001',
        'Material.002',
      'Material.003',
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
        <pointLight name="Light001" intensity={40.00} decay={2} position={[-3.324, 3.904, 3.495]} rotation={[-1.839, 0.602, 1.932]} />
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
        <mesh name="Infill008" geometry={nodes.Infill008.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="Infill007" geometry={nodes.Infill007.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="Infill006" geometry={nodes.Infill006.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="Infill005" geometry={nodes.Infill005.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="Infill004" geometry={nodes.Infill004.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="Infill003" geometry={nodes.Infill003.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="Infill002" geometry={nodes.Infill002.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="Infill001" geometry={nodes.Infill001.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <group name="aEnd_Cap002" position={[-0.8, -1.073, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap002" geometry={nodes.End_Cap002.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap002_1" geometry={nodes.End_Cap002_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap001" position={[-0.8, -1.073, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap001" geometry={nodes.End_Cap001.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap001_1" geometry={nodes.End_Cap001_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap" position={[-0.8, -1.073, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap" geometry={nodes.End_Cap.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap_1" geometry={nodes.End_Cap_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="C-KESP2W6565002" geometry={nodes['C-KESP2W6565002'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="C-KESP2W6565001" geometry={nodes['C-KESP2W6565001'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="C-KESP2W6565" geometry={nodes['C-KESP2W6565'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.623]} />
        <mesh name="Spacer1" geometry={nodes.Spacer1.geometry} material={materials['Material.001']} position={[-0.8, -0.158, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer2" geometry={nodes.Spacer2.geometry} material={materials['Material.001']} position={[-0.8, -0.158, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1001" geometry={nodes.Slat_1001.geometry} material={materials['Material.003']} position={[-0.8, 0.006, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer003" geometry={nodes.Spacer003.geometry} material={materials['Material.001']} position={[-0.8, -0.033, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer004" geometry={nodes.Spacer004.geometry} material={materials['Material.001']} position={[-0.8, -0.033, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1002" geometry={nodes.Slat_1002.geometry} material={materials['Material.003']} position={[-0.8, 0.131, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer005" geometry={nodes.Spacer005.geometry} material={materials['Material.001']} position={[-0.8, 0.092, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer006" geometry={nodes.Spacer006.geometry} material={materials['Material.001']} position={[-0.8, 0.092, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1003" geometry={nodes.Slat_1003.geometry} material={materials['Material.003']} position={[-0.8, 0.256, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer007" geometry={nodes.Spacer007.geometry} material={materials['Material.001']} position={[-0.8, 0.217, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer008" geometry={nodes.Spacer008.geometry} material={materials['Material.001']} position={[-0.8, 0.217, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1004" geometry={nodes.Slat_1004.geometry} material={materials['Material.003']} position={[-0.8, 0.381, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer009" geometry={nodes.Spacer009.geometry} material={materials['Material.001']} position={[-0.8, 0.342, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer010" geometry={nodes.Spacer010.geometry} material={materials['Material.001']} position={[-0.8, 0.342, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1005" geometry={nodes.Slat_1005.geometry} material={materials['Material.003']} position={[-0.8, 0.506, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer011" geometry={nodes.Spacer011.geometry} material={materials['Material.001']} position={[-0.8, 0.467, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer012" geometry={nodes.Spacer012.geometry} material={materials['Material.001']} position={[-0.8, 0.467, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1006" geometry={nodes.Slat_1006.geometry} material={materials['Material.003']} position={[-0.8, 0.631, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer013" geometry={nodes.Spacer013.geometry} material={materials['Material.001']} position={[-0.8, 0.592, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer014" geometry={nodes.Spacer014.geometry} material={materials['Material.001']} position={[-0.8, 0.592, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1007" geometry={nodes.Slat_1007.geometry} material={materials['Material.003']} position={[-0.8, 0.756, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer015" geometry={nodes.Spacer015.geometry} material={materials['Material.001']} position={[-0.8, 0.717, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer016" geometry={nodes.Spacer016.geometry} material={materials['Material.001']} position={[-0.8, 0.717, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1008" geometry={nodes.Slat_1008.geometry} material={materials['Material.003']} position={[-0.8, 0.881, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer017" geometry={nodes.Spacer017.geometry} material={materials['Material.001']} position={[-0.8, 0.842, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer018" geometry={nodes.Spacer018.geometry} material={materials['Material.001']} position={[-0.8, 0.842, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1009" geometry={nodes.Slat_1009.geometry} material={materials['Material.003']} position={[-0.8, 1.006, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer019" geometry={nodes.Spacer019.geometry} material={materials['Material.001']} position={[-0.8, 0.967, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer020" geometry={nodes.Spacer020.geometry} material={materials['Material.001']} position={[-0.8, 0.967, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1010" geometry={nodes.Slat_1010.geometry} material={materials['Material.003']} position={[-0.8, 1.131, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer021" geometry={nodes.Spacer021.geometry} material={materials['Material.001']} position={[-0.8, 1.092, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer022" geometry={nodes.Spacer022.geometry} material={materials['Material.001']} position={[-0.8, 1.092, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1011" geometry={nodes.Slat_1011.geometry} material={materials['Material.003']} position={[-0.8, 1.256, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer023" geometry={nodes.Spacer023.geometry} material={materials['Material.001']} position={[-0.8, 1.217, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer024" geometry={nodes.Spacer024.geometry} material={materials['Material.001']} position={[-0.8, 1.217, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1012" geometry={nodes.Slat_1012.geometry} material={materials['Material.003']} position={[-0.8, 1.381, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer025" geometry={nodes.Spacer025.geometry} material={materials['Material.001']} position={[-0.8, 1.342, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer026" geometry={nodes.Spacer026.geometry} material={materials['Material.001']} position={[-0.8, 1.342, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1013" geometry={nodes.Slat_1013.geometry} material={materials['Material.003']} position={[-0.8, 1.506, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer027" geometry={nodes.Spacer027.geometry} material={materials['Material.001']} position={[-0.8, 1.467, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer028" geometry={nodes.Spacer028.geometry} material={materials['Material.001']} position={[-0.8, 1.467, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1014" geometry={nodes.Slat_1014.geometry} material={materials['Material.003']} position={[-0.8, 1.631, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer029" geometry={nodes.Spacer029.geometry} material={materials['Material.001']} position={[-0.8, 1.592, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer030" geometry={nodes.Spacer030.geometry} material={materials['Material.001']} position={[-0.8, 1.592, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer047" geometry={nodes.Spacer047.geometry} material={materials['Material.001']} position={[-0.8, -0.158, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer048" geometry={nodes.Spacer048.geometry} material={materials['Material.001']} position={[-0.8, -0.158, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1023" geometry={nodes.Slat_1023.geometry} material={materials['Material.003']} position={[-0.8, 0.006, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer049" geometry={nodes.Spacer049.geometry} material={materials['Material.001']} position={[-0.8, -0.033, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer050" geometry={nodes.Spacer050.geometry} material={materials['Material.001']} position={[-0.8, -0.033, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1024" geometry={nodes.Slat_1024.geometry} material={materials['Material.003']} position={[-0.8, 0.131, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer051" geometry={nodes.Spacer051.geometry} material={materials['Material.001']} position={[-0.8, 0.092, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer052" geometry={nodes.Spacer052.geometry} material={materials['Material.001']} position={[-0.8, 0.092, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1025" geometry={nodes.Slat_1025.geometry} material={materials['Material.003']} position={[-0.8, 0.256, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer053" geometry={nodes.Spacer053.geometry} material={materials['Material.001']} position={[-0.8, 0.217, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer054" geometry={nodes.Spacer054.geometry} material={materials['Material.001']} position={[-0.8, 0.217, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1026" geometry={nodes.Slat_1026.geometry} material={materials['Material.003']} position={[-0.8, 0.381, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer055" geometry={nodes.Spacer055.geometry} material={materials['Material.001']} position={[-0.8, 0.342, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer056" geometry={nodes.Spacer056.geometry} material={materials['Material.001']} position={[-0.8, 0.342, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1027" geometry={nodes.Slat_1027.geometry} material={materials['Material.003']} position={[-0.8, 0.506, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer057" geometry={nodes.Spacer057.geometry} material={materials['Material.001']} position={[-0.8, 0.467, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer058" geometry={nodes.Spacer058.geometry} material={materials['Material.001']} position={[-0.8, 0.467, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1028" geometry={nodes.Slat_1028.geometry} material={materials['Material.003']} position={[-0.8, 0.631, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer059" geometry={nodes.Spacer059.geometry} material={materials['Material.001']} position={[-0.8, 0.592, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer060" geometry={nodes.Spacer060.geometry} material={materials['Material.001']} position={[-0.8, 0.592, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1029" geometry={nodes.Slat_1029.geometry} material={materials['Material.003']} position={[-0.8, 0.756, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer061" geometry={nodes.Spacer061.geometry} material={materials['Material.001']} position={[-0.8, 0.717, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer062" geometry={nodes.Spacer062.geometry} material={materials['Material.001']} position={[-0.8, 0.717, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1030" geometry={nodes.Slat_1030.geometry} material={materials['Material.003']} position={[-0.8, 0.881, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer063" geometry={nodes.Spacer063.geometry} material={materials['Material.001']} position={[-0.8, 0.842, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer064" geometry={nodes.Spacer064.geometry} material={materials['Material.001']} position={[-0.8, 0.842, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1031" geometry={nodes.Slat_1031.geometry} material={materials['Material.003']} position={[-0.8, 1.006, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer065" geometry={nodes.Spacer065.geometry} material={materials['Material.001']} position={[-0.8, 0.967, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer066" geometry={nodes.Spacer066.geometry} material={materials['Material.001']} position={[-0.8, 0.967, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1032" geometry={nodes.Slat_1032.geometry} material={materials['Material.003']} position={[-0.8, 1.131, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer067" geometry={nodes.Spacer067.geometry} material={materials['Material.001']} position={[-0.8, 1.092, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer068" geometry={nodes.Spacer068.geometry} material={materials['Material.001']} position={[-0.8, 1.092, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1033" geometry={nodes.Slat_1033.geometry} material={materials['Material.003']} position={[-0.8, 1.256, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer069" geometry={nodes.Spacer069.geometry} material={materials['Material.001']} position={[-0.8, 1.217, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer070" geometry={nodes.Spacer070.geometry} material={materials['Material.001']} position={[-0.8, 1.217, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1034" geometry={nodes.Slat_1034.geometry} material={materials['Material.003']} position={[-0.8, 1.381, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer071" geometry={nodes.Spacer071.geometry} material={materials['Material.001']} position={[-0.8, 1.342, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer072" geometry={nodes.Spacer072.geometry} material={materials['Material.001']} position={[-0.8, 1.342, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1035" geometry={nodes.Slat_1035.geometry} material={materials['Material.003']} position={[-0.8, 1.506, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer073" geometry={nodes.Spacer073.geometry} material={materials['Material.001']} position={[-0.8, 1.467, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer074" geometry={nodes.Spacer074.geometry} material={materials['Material.001']} position={[-0.8, 1.467, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Slat_1036" geometry={nodes.Slat_1036.geometry} material={materials['Material.003']} position={[-0.8, 1.631, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.666]} />
        <mesh name="Spacer075" geometry={nodes.Spacer075.geometry} material={materials['Material.001']} position={[-0.8, 1.592, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <mesh name="Spacer076" geometry={nodes.Spacer076.geometry} material={materials['Material.001']} position={[-0.8, 1.592, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.886]} />
        <spotLight
  position={[10, 10, 10]} // Set the position of the spotlight
  angle={0.3} // Set the spotlight angle
  penumbra={0.1} // Set the spotlight penumbra
  intensity={1} // Set the intensity of the spotlight
  castShadow // Enable casting shadows
  color={0xff0000} // Set the color of the spotlight (red in this case)
/>
      </group>
    </group>
  )
}

useGLTF.preload('/modeltest.glb')

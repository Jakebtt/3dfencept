import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/model3.glb');
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
        <mesh name="Spacer4" geometry={nodes.Spacer4.geometry} material={materials['Material.001']} position={[-0.8, -0.338, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer2" geometry={nodes.Spacer2.geometry} material={materials['Material.001']} position={[-0.8, -0.338, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1" geometry={nodes.Slat_1.geometry} material={materials['Material.001']} position={[-0.8, -0.026, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Rusty_Screw_Cylinder064" geometry={nodes.Rusty_Screw_Cylinder064.geometry} material={materials['Material.019']} position={[-0.025, 2.765, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder063" geometry={nodes.Rusty_Screw_Cylinder063.geometry} material={materials['Material.019']} position={[-0.025, 2.591, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder062" geometry={nodes.Rusty_Screw_Cylinder062.geometry} material={materials['Material.019']} position={[-0.025, 2.412, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder061" geometry={nodes.Rusty_Screw_Cylinder061.geometry} material={materials['Material.019']} position={[-0.025, 2.237, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder060" geometry={nodes.Rusty_Screw_Cylinder060.geometry} material={materials['Material.019']} position={[-0.025, 2.056, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder059" geometry={nodes.Rusty_Screw_Cylinder059.geometry} material={materials['Material.019']} position={[-0.025, 1.881, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder058" geometry={nodes.Rusty_Screw_Cylinder058.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder057" geometry={nodes.Rusty_Screw_Cylinder057.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder055" geometry={nodes.Rusty_Screw_Cylinder055.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder054" geometry={nodes.Rusty_Screw_Cylinder054.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder053" geometry={nodes.Rusty_Screw_Cylinder053.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder052" geometry={nodes.Rusty_Screw_Cylinder052.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder051" geometry={nodes.Rusty_Screw_Cylinder051.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder050" geometry={nodes.Rusty_Screw_Cylinder050.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder049" geometry={nodes.Rusty_Screw_Cylinder049.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder048" geometry={nodes.Rusty_Screw_Cylinder048.geometry} material={materials['Material.019']} position={[-0.025, 2.765, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder047" geometry={nodes.Rusty_Screw_Cylinder047.geometry} material={materials['Material.019']} position={[-0.025, 2.591, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder046" geometry={nodes.Rusty_Screw_Cylinder046.geometry} material={materials['Material.019']} position={[-0.025, 2.412, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder045" geometry={nodes.Rusty_Screw_Cylinder045.geometry} material={materials['Material.019']} position={[-0.025, 2.237, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder044" geometry={nodes.Rusty_Screw_Cylinder044.geometry} material={materials['Material.019']} position={[-0.025, 2.056, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder043" geometry={nodes.Rusty_Screw_Cylinder043.geometry} material={materials['Material.019']} position={[-0.025, 1.881, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
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
        <mesh name="Rusty_Screw_Cylinder032" geometry={nodes.Rusty_Screw_Cylinder032.geometry} material={materials['Material.019']} position={[-0.025, 2.765, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder031" geometry={nodes.Rusty_Screw_Cylinder031.geometry} material={materials['Material.019']} position={[-0.025, 2.591, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder030" geometry={nodes.Rusty_Screw_Cylinder030.geometry} material={materials['Material.019']} position={[-0.025, 2.412, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder029" geometry={nodes.Rusty_Screw_Cylinder029.geometry} material={materials['Material.019']} position={[-0.025, 2.237, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder028" geometry={nodes.Rusty_Screw_Cylinder028.geometry} material={materials['Material.019']} position={[-0.025, 2.056, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder027" geometry={nodes.Rusty_Screw_Cylinder027.geometry} material={materials['Material.019']} position={[-0.025, 1.881, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
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
        <mesh name="Rusty_Screw_Cylinder016" geometry={nodes.Rusty_Screw_Cylinder016.geometry} material={materials['Material.019']} position={[-0.025, 2.765, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder015" geometry={nodes.Rusty_Screw_Cylinder015.geometry} material={materials['Material.019']} position={[-0.025, 2.591, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder014" geometry={nodes.Rusty_Screw_Cylinder014.geometry} material={materials['Material.019']} position={[-0.025, 2.412, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder013" geometry={nodes.Rusty_Screw_Cylinder013.geometry} material={materials['Material.019']} position={[-0.025, 2.237, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder012" geometry={nodes.Rusty_Screw_Cylinder012.geometry} material={materials['Material.019']} position={[-0.025, 2.056, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder011" geometry={nodes.Rusty_Screw_Cylinder011.geometry} material={materials['Material.019']} position={[-0.025, 1.881, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
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
        <mesh name="Infill008" geometry={nodes.Infill008.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="Infill007" geometry={nodes.Infill007.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="Infill006" geometry={nodes.Infill006.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="Infill005" geometry={nodes.Infill005.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="Infill004" geometry={nodes.Infill004.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="Infill003" geometry={nodes.Infill003.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="Infill002" geometry={nodes.Infill002.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="Infill001" geometry={nodes.Infill001.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <group name="aEnd_Cap002" position={[-0.8, 0.035, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap002" geometry={nodes.End_Cap002.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap002_1" geometry={nodes.End_Cap002_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap001" position={[-0.8, 0.035, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap001" geometry={nodes.End_Cap001.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap001_1" geometry={nodes.End_Cap001_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap" position={[-0.8, 0.035, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap" geometry={nodes.End_Cap.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap_1" geometry={nodes.End_Cap_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="C-KESP2W6565002" geometry={nodes['C-KESP2W6565002'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="C-KESP2W6565001" geometry={nodes['C-KESP2W6565001'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="C-KESP2W6565" geometry={nodes['C-KESP2W6565'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.013]} />
        <mesh name="Spacer001" geometry={nodes.Spacer001.geometry} material={materials['Material.001']} position={[-0.8, -0.11, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer003" geometry={nodes.Spacer003.geometry} material={materials['Material.001']} position={[-0.8, -0.11, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1001" geometry={nodes.Slat_1001.geometry} material={materials['Material.001']} position={[-0.8, 0.202, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer005" geometry={nodes.Spacer005.geometry} material={materials['Material.001']} position={[-0.8, 0.117, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer006" geometry={nodes.Spacer006.geometry} material={materials['Material.001']} position={[-0.8, 0.117, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1002" geometry={nodes.Slat_1002.geometry} material={materials['Material.001']} position={[-0.8, 0.43, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer007" geometry={nodes.Spacer007.geometry} material={materials['Material.001']} position={[-0.8, 0.345, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer008" geometry={nodes.Spacer008.geometry} material={materials['Material.001']} position={[-0.8, 0.345, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1003" geometry={nodes.Slat_1003.geometry} material={materials['Material.001']} position={[-0.8, 0.657, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer009" geometry={nodes.Spacer009.geometry} material={materials['Material.001']} position={[-0.8, 0.572, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer010" geometry={nodes.Spacer010.geometry} material={materials['Material.001']} position={[-0.8, 0.572, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1004" geometry={nodes.Slat_1004.geometry} material={materials['Material.001']} position={[-0.8, 0.885, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer011" geometry={nodes.Spacer011.geometry} material={materials['Material.001']} position={[-0.8, 0.8, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer012" geometry={nodes.Spacer012.geometry} material={materials['Material.001']} position={[-0.8, 0.8, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1005" geometry={nodes.Slat_1005.geometry} material={materials['Material.001']} position={[-0.8, 1.112, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer013" geometry={nodes.Spacer013.geometry} material={materials['Material.001']} position={[-0.8, 1.028, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer014" geometry={nodes.Spacer014.geometry} material={materials['Material.001']} position={[-0.8, 1.028, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1006" geometry={nodes.Slat_1006.geometry} material={materials['Material.001']} position={[-0.8, 1.34, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer015" geometry={nodes.Spacer015.geometry} material={materials['Material.001']} position={[-0.8, 1.256, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1007" geometry={nodes.Slat_1007.geometry} material={materials['Material.001']} position={[-0.8, 1.568, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer017" geometry={nodes.Spacer017.geometry} material={materials['Material.001']} position={[-0.8, 1.482, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer018" geometry={nodes.Spacer018.geometry} material={materials['Material.001']} position={[-0.8, 1.482, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1008" geometry={nodes.Slat_1008.geometry} material={materials['Material.001']} position={[-0.8, 1.794, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer019" geometry={nodes.Spacer019.geometry} material={materials['Material.001']} position={[-0.8, 1.71, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer020" geometry={nodes.Spacer020.geometry} material={materials['Material.001']} position={[-0.8, 1.71, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1009" geometry={nodes.Slat_1009.geometry} material={materials['Material.001']} position={[-0.8, 2.022, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer021" geometry={nodes.Spacer021.geometry} material={materials['Material.001']} position={[-0.8, 1.937, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer022" geometry={nodes.Spacer022.geometry} material={materials['Material.001']} position={[-0.8, 1.937, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1010" geometry={nodes.Slat_1010.geometry} material={materials['Material.001']} position={[-0.8, 2.25, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer023" geometry={nodes.Spacer023.geometry} material={materials['Material.001']} position={[-0.8, 2.165, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer024" geometry={nodes.Spacer024.geometry} material={materials['Material.001']} position={[-0.8, 2.165, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]}>
          <mesh name="Spacer016" geometry={nodes.Spacer016.geometry} material={materials['Material.001']} position={[0, 0, 0.331]} />
        </mesh>
        <mesh name="Slat_1011" geometry={nodes.Slat_1011.geometry} material={materials['Material.001']} position={[-0.8, 2.477, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Slat_1012" geometry={nodes.Slat_1012.geometry} material={materials['Material.001']} position={[-0.8, 2.705, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer025" geometry={nodes.Spacer025.geometry} material={materials['Material.001']} position={[-0.8, -0.338, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer026" geometry={nodes.Spacer026.geometry} material={materials['Material.001']} position={[-0.8, -0.338, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1013" geometry={nodes.Slat_1013.geometry} material={materials['Material.001']} position={[-0.8, -0.026, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer027" geometry={nodes.Spacer027.geometry} material={materials['Material.001']} position={[-0.8, -0.11, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer028" geometry={nodes.Spacer028.geometry} material={materials['Material.001']} position={[-0.8, -0.11, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1014" geometry={nodes.Slat_1014.geometry} material={materials['Material.001']} position={[-0.8, 0.202, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer029" geometry={nodes.Spacer029.geometry} material={materials['Material.001']} position={[-0.8, 0.117, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer030" geometry={nodes.Spacer030.geometry} material={materials['Material.001']} position={[-0.8, 0.117, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1015" geometry={nodes.Slat_1015.geometry} material={materials['Material.001']} position={[-0.8, 0.43, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer031" geometry={nodes.Spacer031.geometry} material={materials['Material.001']} position={[-0.8, 0.345, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer032" geometry={nodes.Spacer032.geometry} material={materials['Material.001']} position={[-0.8, 0.345, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1016" geometry={nodes.Slat_1016.geometry} material={materials['Material.001']} position={[-0.8, 0.657, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer033" geometry={nodes.Spacer033.geometry} material={materials['Material.001']} position={[-0.8, 0.572, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer034" geometry={nodes.Spacer034.geometry} material={materials['Material.001']} position={[-0.8, 0.572, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1017" geometry={nodes.Slat_1017.geometry} material={materials['Material.001']} position={[-0.8, 0.885, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer035" geometry={nodes.Spacer035.geometry} material={materials['Material.001']} position={[-0.8, 0.8, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer036" geometry={nodes.Spacer036.geometry} material={materials['Material.001']} position={[-0.8, 0.8, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1018" geometry={nodes.Slat_1018.geometry} material={materials['Material.001']} position={[-0.8, 1.112, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer037" geometry={nodes.Spacer037.geometry} material={materials['Material.001']} position={[-0.8, 1.028, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer038" geometry={nodes.Spacer038.geometry} material={materials['Material.001']} position={[-0.8, 1.028, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1019" geometry={nodes.Slat_1019.geometry} material={materials['Material.001']} position={[-0.8, 1.34, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer039" geometry={nodes.Spacer039.geometry} material={materials['Material.001']} position={[-0.8, 1.256, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1020" geometry={nodes.Slat_1020.geometry} material={materials['Material.001']} position={[-0.8, 1.568, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer040" geometry={nodes.Spacer040.geometry} material={materials['Material.001']} position={[-0.8, 1.482, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer041" geometry={nodes.Spacer041.geometry} material={materials['Material.001']} position={[-0.8, 1.482, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1021" geometry={nodes.Slat_1021.geometry} material={materials['Material.001']} position={[-0.8, 1.794, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer042" geometry={nodes.Spacer042.geometry} material={materials['Material.001']} position={[-0.8, 1.71, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer043" geometry={nodes.Spacer043.geometry} material={materials['Material.001']} position={[-0.8, 1.71, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1022" geometry={nodes.Slat_1022.geometry} material={materials['Material.001']} position={[-0.8, 2.022, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer044" geometry={nodes.Spacer044.geometry} material={materials['Material.001']} position={[-0.8, 1.937, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer045" geometry={nodes.Spacer045.geometry} material={materials['Material.001']} position={[-0.8, 1.937, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1023" geometry={nodes.Slat_1023.geometry} material={materials['Material.001']} position={[-0.8, 2.25, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Spacer046" geometry={nodes.Spacer046.geometry} material={materials['Material.001']} position={[-0.8, 2.165, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Spacer047" geometry={nodes.Spacer047.geometry} material={materials['Material.001']} position={[-0.8, 2.165, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 2.75]} />
        <mesh name="Slat_1024" geometry={nodes.Slat_1024.geometry} material={materials['Material.001']} position={[-0.8, 2.477, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Slat_1025" geometry={nodes.Slat_1025.geometry} material={materials['Material.001']} position={[-0.8, 2.705, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/model3.glb')

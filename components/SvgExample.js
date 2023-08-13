import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    SvgUri,
    SvgXml,
  } from 'react-native-svg';
  
  import React from 'react';
  import { ScrollView, StyleSheet } from 'react-native';
  import Puppy1 from '../assets/svg/noun-puppy-2778277.svg';
  import Puppy2 from '../assets/svg/noun-puppy-4332362.svg';
  import Icon from '../assets/svg/american-football-svgrepo-com.svg';

  export default function SvgExample () {
      return (
        <ScrollView
          contentContainerStyle={
            { flexGrow: 1, alignItems: 'center', justifyContent: 'center' }
          }>
          <Svg height="200" width="200" viewBox="0 0 100 100">
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill="green"
            />
            <Rect
              x="15"
              y="15"
              width="70"
              height="70"
              stroke="red"
              strokeWidth="2"
              fill="yellow"
            />
          </Svg>
          <SvgXml width="200" height="200" xml={Icon} />
          <SvgXml width="200" height="200" xml={Puppy1} />
          <SvgXml width="200" height="200" xml={Puppy2} />
          <SvgUri
            width="200"
            height="200"
            uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
          />
          
        </ScrollView>
      );
  }
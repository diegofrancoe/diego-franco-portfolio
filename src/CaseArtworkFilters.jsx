import { productThemes } from './productThemes';

// Tint luminance, keeping the original fur detail and transparent edges.
export default function CaseArtworkFilters() {
  return <svg width="0" height="0" aria-hidden="true" focusable="false" style={{position:'absolute',pointerEvents:'none'}}><defs>{Object.entries(productThemes).map(([id,{accent}])=>{
    const channels=[1,3,5].map(offset=>parseInt(accent.slice(offset,offset+2),16)/255);
    return <g key={id}><filter id={'case-art-tint-'+id} colorInterpolationFilters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="linear" slope={channels[0]/.65} intercept="0"/><feFuncG type="linear" slope={channels[1]/.65} intercept="0"/><feFuncB type="linear" slope={channels[2]/.65} intercept="0"/><feFuncA type="identity"/></feComponentTransfer></filter><filter id={'case-art-tint-'+id+'-window'} colorInterpolationFilters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="table" tableValues={`0 ${channels[0]*.25} ${channels[0]*.5} ${channels[0]*.75} ${channels[0]} ${channels[0]*1.05} .92 .96 .98`}/><feFuncG type="table" tableValues={`0 ${channels[1]*.25} ${channels[1]*.5} ${channels[1]*.75} ${channels[1]} ${channels[1]*1.05} .90 .94 .96`}/><feFuncB type="table" tableValues={`0 ${channels[2]*.25} ${channels[2]*.5} ${channels[2]*.75} ${channels[2]} ${channels[2]*1.05} .84 .88 .91`}/><feFuncA type="identity"/></feComponentTransfer></filter></g>;
  })}</defs></svg>;
}

import AppState from './js/app/appstate.js';
import { hex2rgb } from './js/utils/utils.js'

/**
 * Initializes WebGL2 
 * @returns { WebGL2RenderingContext | null } The WebGL2 context or Null
 */

 let gl;

function initGl( )
{
    // Call checkKey whenever a key is pressed
    return gl = canvas.getContext('webgl2');
}


/**
 * Clears scene and canvas
 * 
 * Find the Aggie colors here: https://marketingtoolbox.ucdavis.edu/brand-guide/colors
 * Use the 'hex2rgb' function to convert HEX colors
 * 
 * Use app_state.getState( ui_element_name ) to query the UI state
 * For example app_state.getState( 'Canvas Color' ) returns the currently selected color name
 * 
 * @param { WebGL2RenderingContext } gl The WebGL2 context used on the canvas element
 * @param { AppState } app_state The state of the UI
 */
function clearCanvas( gl, app_state )
{
    //throw '"clearCanvas" not implemented'
    if(app_state.getState('Canvas Color') == 'Aggie Blue'){
      gl.clearColor(hex2rgb('022851')[0], hex2rgb('022851')[1], hex2rgb('022851')[2], 0.8);
    } else if(app_state.getState('Canvas Color') == 'Aggie Gold'){
      gl.clearColor(hex2rgb('FFBF00')[0], hex2rgb('FFBF00')[1], hex2rgb('FFBF00')[2], 0.8);
    }
    
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, 0, 0);


}


// JS Module Export -- No need to modify this
export
{

    initGl,
    clearCanvas,

}
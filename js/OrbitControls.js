var galaxy_frame = document.getElementById("galaxy-frame");
var scene = null;
var camera = null;
var renderer = null;
  
function initTherr() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({
    alpha: true
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  galaxy_frame.append(renderer.domElement)
}

function prohibitFast(label) {
  label.oncontextmenu = function () {
    return false;
  }

  return {
    "message": "Failed to change element right click prohibition"
  }
}

window.onload = function () {
  initTherr();
  prohibitFast(galaxy_frame)
}

// 窗口size宽度事件，重新设置大小
window.onresize = function () {
  camera.aspect = galaxy_frame.clientWidth / galaxy_frame.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(galaxy_frame.clientWidth, galaxy_frame.clientHeight);
};

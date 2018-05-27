const canvasContent = {};
import $ from 'jquery';
import async from 'async';

var iphone, iphone2, iphone3, wifog, display, camera;

canvasContent.init = function() {
  var canvas = document.getElementById('canvas');
  var canvasHeight = canvas.height;
  var canvasWidth = canvas.width;
  var engine = new BABYLON.Engine(canvas, true);
  engine.enableOfflineSupport = false;

  var createScene = function() {
    BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;

    // create a basic BJS Scene object
    var scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    //scene.debugLayer.show();

    // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
    camera = new BABYLON.FreeCamera(
      'camera1',
      new BABYLON.Vector3(0.5, 0, -8),
      scene
    );

    // target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // attach the camera to the canvas
    //camera.attachControl(canvas, false);

    camera.fov = 0.6;

    loadModels(scene, () => {
      var cameraAnimationIn = new BABYLON.Animation(
        'cameraAnimation',
        'position.z',
        30,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
      );
      var cameraAnimationOut = new BABYLON.Animation(
        'cameraAnimation',
        'position.z',
        30,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
      );
      var keysIn = [
        {
          frame: 0,
          value: 20
        },
        {
          frame: 25,
          value: -8
        }
      ];
      var keysOut = [
        {
          frame: 0,
          value: -8
        },
        {
          frame: 25,
          value: 20
        }
      ];
      var easingFunction = new BABYLON.QuinticEase();
      cameraAnimationIn.setKeys(keysIn);
      cameraAnimationOut.setKeys(keysOut);
      easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
      cameraAnimationIn.setEasingFunction(easingFunction);
      cameraAnimationOut.setEasingFunction(easingFunction);
      camera.animations = [];
      camera.animations.push(cameraAnimationIn);
      scene.beginAnimation(camera, 0, 25, false);

      $('a:not(.no-ani)').click(function() {
        easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEIN);
        camera.animations = [];
        camera.animations.push(cameraAnimationOut);
        scene.beginAnimation(camera, 0, 25, false);
      });

      setCameraPosition(camera);

      window.addEventListener('resize', function() {
        setCameraPosition();
      });
    });

    // return the created scene
    return scene;
  };

  var scene = createScene();

  engine.runRenderLoop(function() {
    scene.render();
  });

  window.addEventListener('resize', function() {
    engine.resize();
  });
  
/*
  var initialMouseX;
  var initialMouseY;
  document.addEventListener('mouseenter', function(event) {
    console.log('now');
    var camera = scene.activeCamera;
    initialMouseX = event.pageX / canvasWidth;
    initialMouseY = event.pageY / canvasHeight;
  });

  document.addEventListener('mousemove', function(event) {
    var camera = scene.activeCamera;
    camera.rotation.x = deg2rad(((event.pageY - initialMouseY) / canvasHeight - 0.5) * 0.2);
    camera.rotation.y = deg2rad(((event.pageX - initialMouseX) / canvasWidth - 0.5) * 0.2);
  });
*/
};

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function loadModels(scene, callback) {
  window.speedFactor = 1;

  async.parallel(
    [
      callback => {
        BABYLON.SceneLoader.ImportMesh(
          null,
          'models/',
          'iphone.obj',
          scene,
          function(meshes) {
            iphone = meshes[0];
            iphone.position = new BABYLON.Vector3(3, -7, 20);
            iphone.scaling = new BABYLON.Vector3(0.8, 0.8, 0.8);
            iphone.rotation.y = deg2rad(10);

            var iphoneLight = new BABYLON.PointLight(
              'Omni0',
              new BABYLON.Vector3(-10, 6, 10),
              scene
            );
            iphoneLight.includedOnlyMeshes.push(iphone);
            iphoneLight.diffuse = new BABYLON.Color3(1, 1, 1);
            iphoneLight.specular = new BABYLON.Color3(1, 1, 1);
            iphoneLight.intensity = 1.5;
            iphoneLight.range = 300;

            iphone2 = iphone.clone('iphone2');
            iphone2.position = new BABYLON.Vector3(-1, 4.5, 13);
            iphone2.scaling = new BABYLON.Vector3(0.9, 0.9, 0.9);
            iphone2.rotation.y = deg2rad(-30);

            iphone3 = iphone.clone('iphone2');
            iphone3.position = new BABYLON.Vector3(9, -13.5, 20);
            iphone3.scaling = new BABYLON.Vector3(0.8, 0.8, 0.8);
            iphone3.rotation.y = deg2rad(10);

            var iphone2Light = new BABYLON.PointLight(
              'Omni3',
              new BABYLON.Vector3(-1, 10, -5),
              scene
            );
            iphone2Light.includedOnlyMeshes.push(iphone2);
            iphone2Light.diffuse = new BABYLON.Color3(1, 1, 1);
            iphone2Light.specular = new BABYLON.Color3(1, 1, 1);
            iphone2Light.intensity = 3;
            iphone2Light.range = 300;

            var iphone3Light = new BABYLON.PointLight(
              'Omni4',
              new BABYLON.Vector3(-1, 10, 0),
              scene
            );
            iphone3Light.includedOnlyMeshes.push(iphone3);
            iphone3Light.diffuse = new BABYLON.Color3(1, 1, 1);
            iphone3Light.specular = new BABYLON.Color3(1, 1, 1);
            iphone3Light.intensity = 1.2;
            iphone3Light.range = 300;

            let i = 0;
            let iphonePosition = iphone.position.y;

            scene.registerBeforeRender(function() {
              iphone.rotation.y = 0.5 + Math.sin(i / 120 * window.speedFactor) * 0.3;
              iphone.position.y =
                iphonePosition + Math.sin(i / 200 * window.speedFactor) * 0.3;
              iphone2.rotation.y = 0.2 + Math.cos(i / 200 * window.speedFactor) * 0.3;
              iphone3.rotation.y = 0.1 + Math.sin(i / 140 * window.speedFactor) * 0.4;
              i++;
            });

            callback();
          }
        );
      },
      callback => {
        BABYLON.SceneLoader.ImportMesh(
          null,
          'models/',
          'monitor_viskura.obj',
          scene,
          function(meshes) {
            display = meshes[0];
            display.position = new BABYLON.Vector3(10, 0, 20);

            var displayLight = new BABYLON.PointLight(
              'Omni1',
              new BABYLON.Vector3(-18, 20, 10),
              scene
            );
            displayLight.includedOnlyMeshes.push(display);
            displayLight.diffuse = new BABYLON.Color3(1, 1, 1);
            displayLight.specular = new BABYLON.Color3(1, 1, 1);
            displayLight.intensity = 1.6;
            displayLight.range = 200;

            let i = 50;
            let displayPosition = display.position.y;

            scene.registerBeforeRender(function() {
              display.rotation.y =
                deg2rad(-140) + Math.sin(i / 280 * window.speedFactor) * 0.1;
              display.position.y =
                displayPosition + Math.cos(i / 200 * window.speedFactor) * 0.3;
              i++;
            });

            callback();
          }
        );
      },
      callback => {
        BABYLON.SceneLoader.ImportMesh(
          null,
          'models/',
          'wifog.obj',
          scene,
          function(meshes) {
            wifog = meshes[0];
            wifog.position = new BABYLON.Vector3(12, 4, 15);
            wifog.scaling = new BABYLON.Vector3(0.35, 0.35, 0.35);

            var wifogLight = new BABYLON.PointLight(
              'Omni2',
              new BABYLON.Vector3(-10, 10, 10),
              scene
            );
            wifogLight.includedOnlyMeshes.push(wifog);
            wifogLight.diffuse = new BABYLON.Color3(1, 1, 1);
            wifogLight.specular = new BABYLON.Color3(1, 1, 1);
            wifogLight.intensity = 3;
            wifogLight.range = 200;

            let i = 0;

            scene.registerBeforeRender(function() {
              wifog.rotation.y =
                deg2rad(-10) + Math.sin(i / 160 * window.speedFactor) * 0.2;
              i++;
            });

            callback();
          }
        );
      }
    ],
    callback
  );
}

function setCameraPosition() {
  if ($(window).width() < 636) {
    camera.position.x = 4.5;
    camera.position.y = 0;
    iphone2.position.x = 0.4;
    iphone3.position.y = -11.5;
    iphone3.position.x = 7;
  } else {
    camera.position.x = 0.5;
    camera.position.y = 0;
    iphone2.position.x = -1;
    iphone3.position.y = -13.5;
    iphone3.position.x = 9;
  }
}

export default canvasContent;

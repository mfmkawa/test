<!doctype HTML>
<html>
<script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>
<script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.2/aframe/build/aframe-ar.js"> </script>
<script>
    AFRAME.registerComponent('registerevents', {
        init: function () {
            var marker = this.el;

            // マーカーを検出したイベントの登録
            marker.addEventListener('markerFound', function () {
                var markerId = marker.id;
                console.log('markerFound', markerId);

                // アニメーションの開始
                document.querySelector('#box').emit('markerfound');
            });

            // マーカーを見失ったイベントの登録
            marker.addEventListener('markerLost', function () {
                var markerId = marker.id;
                console.log('markerLost', markerId);

                // アニメーションの停止
                document.querySelector('#box').emit('markerlost');
            });
        }
    });
</script>

<body style="margin : 0px; overflow: hidden;">
    <a-scene embedded arjs="debugUIEnabled:false;">
        <a-marker preset="hiro" id="marker-hiro" registerevents>
            <a-box id="box" position="0 0.5 0" wireframe="true" rotation="270 270 270">
              <a-animation
                attribute="rotation"
                from="270 270 270"
                to="90 90 90"
                dur="4000"
                repeat="indefinite"
                easing="ease">
              </a-animation>
            </a-box>
        </a-marker>
        <a-entity camera
          cursor-visible="true"
          cursor-scale="2"
          cursor-color="#ff0000"
          cursor-opacity="0.5">
        </a-entity>
    </a-scene>
</body>

</html>

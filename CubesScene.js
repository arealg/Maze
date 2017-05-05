var cubeVertices1 = new Float32Array([
  -0.5, -0.5,  0.5,  0.5, -0.5,  0.5,  0.5,  0.5,  0.5, -0.5,  0.5,  0.5,
  -0.5, -0.5, -0.5, -0.5,  0.5, -0.5,  0.5,  0.5, -0.5,  0.5, -0.5, -0.5,
   0.5, 0.5,  -0.5, -0.5,  0.5,  -0.5,  -0.5,  0.5,  0.5, 0.5,  0.5, 0.5,
  -0.5, -0.5, -0.5,  0.5, -0.5, -0.5,  0.5, -0.5,  0.5, -0.5, -0.5,  0.5,
   0.5, -0.5, -0.5,  0.5,  0.5, -0.5,  0.5,  0.5,  0.5,  0.5, -0.5,  0.5,
  -0.5, -0.5, -0.5, -0.5, 0.5,  -0.5, -0.5,  0.5,  0.5, -0.5,  -0.5, 0.5
]);

var cubeVertexNormals1 = new Float32Array([
   0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,   // Front face
   0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,   // Back face
   0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,   // Top face
   0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,   // Bottom face
   1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,   // Right face
  -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0   // Left face
]);

var cubeTextureCoordinates1 = new Float32Array([
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
]);

var cubeVertexIndices1 = new Uint16Array([
    0,  1,  2,      0,  2,  3,
    4,  5,  6,      4,  6,  7,
    8,  9,  10,     8,  10, 11,
    12, 13, 14,     12, 14, 15,
    16, 17, 18,     16, 18, 19,
    20, 21, 22,     20, 22, 23
  ]);

var cubeVertices = new Float32Array([
  -0.5, -0.5,  0.5,  0.5, -0.5,  0.5,  0.5,  0.5,  0.5, -0.5,  0.5,  0.5,
  -0.5, -0.5, -0.5, -0.5,  0.5, -0.5,  0.5,  0.5, -0.5,  0.5, -0.5, -0.5,
   0.5, 0.5,  -0.5, -0.5,  0.5,  -0.5,  -0.5,  0.5,  0.5, 0.5,  0.5, 0.5,
  -0.5, -0.5, -0.5,  0.5, -0.5, -0.5,  0.5, -0.5,  0.5, -0.5, -0.5,  0.5,
   0.5, -0.5, -0.5,  0.5,  0.5, -0.5,  0.5,  0.5,  0.5,  0.5, -0.5,  0.5,
  -0.5, -0.5, -0.5, -0.5, 0.5,  -0.5, -0.5,  0.5,  0.5, -0.5,  -0.5, 0.5

]);


var cubeVertexNormals = new Float32Array([
   0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,   // Front face
   0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,   // Back face
   0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,   // Top face
   0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,   // Bottom face
   1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,   // Right face
  -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0   // Left face
]);

var cubeTextureCoordinates = new Float32Array([
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
  0.0,  0.0,     1.0,  0.0,     1.0,  1.0,     0.0,  1.0,
]);

var cubeVertexIndices = new Uint16Array([
    0,  1,  2,      0,  2,  3,
    4,  5,  6,      4,  6,  7,
    8,  9,  10,     8,  10, 11,
    12, 13, 14,     12, 14, 15,
    16, 17, 18,     16, 18, 19,
    20, 21, 22,     20, 22, 23
  ]);



var floorVertices = new Float32Array([
  -7.5, -7.5, -0.5, -7.5,  7.5, -0.5,  7.5,  7.5, -0.5,  7.5, -7.5, -0.5,   // Back face
]);


var floorTextureCoordinates = new Float32Array([
  0.0,  0.0,     20.0,  0.0,     20.0,  20.0,     0.0,  20.0,  // Front
]);

var floorVertexIndices = new Uint16Array([
    0,  1,  2,      0,  2,  3
  ]);



var skyVertices = new Float32Array([
  -7.5, -7.5, 0.5, -7.5,  7.5, 0.5,  7.5,  7.5, 0.5,  7.5, -7.5, 0.5,   // Back face
]);

var skyTextureCoordinates = new Float32Array([
  0.0,  0.0,     32.0,  0.0,     32.0,  32.0,     0.0,  32.0,  // Front
]);

var skyVertexIndices = new Uint16Array([
    0,  1,  2,      0,  2,  3
  ]);

var gl;

var cube;
var person;
var enemie;
var floor;
var sky;

var mMatrix   = new Matrix4();
var vMatrix   = new Matrix4();
var pMatrix   = new Matrix4();
var mvpMatrix = new Matrix4();

var lamp_off = [0.0,0.0,0.0];
var lamp_on = [1.0,1.0,1.0];
var ligth = [0.5,0.5,0.5]; 

var lamp = lamp_off;
var ligthpuntual;
var eyeposition;

var u_MvpMatrix;
var buttons = [];

var canvas = document.getElementById('webgl');
var canvas1 = document.getElementById('maze');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas1.width = window.innerWidth;
// canvas1.height = window.innerHeight;
var ctx = canvas1.getContext("2d");

var eyeX1, eyeY1;
var eyeX, eyeY, eyeZ =0;
var atX = 0, atY= 0, atZ = 0;
var eyeX1, eyeY1;
var camera = false;


var k = 0.1;
var angle = 90;
var angle1 =90;
var angle_x;

var num_enemies = 4;
var enemies = [];

var wall = [];

var totalTiempo=61;

var win = false;

var pos_cameraX, pos_cameraY;

var VSHADER_SOURCE =
  'attribute highp vec3 a_VertexPosition;\n' +
  'attribute highp vec2 a_TextureCoord;\n' +
  'attribute highp vec3 a_VertexNormal;\n' +
  'uniform highp mat4 u_NormalMatrix;\n' +
  'uniform highp mat4 u_MvpMatrix;\n' +
  'uniform highp mat4 u_ModelMatrix;\n' +
  'varying highp vec2 v_TextureCoord;\n' +
  'varying highp vec3 v_Lighting;\n' +
  'uniform highp vec3 u_ambientLight\n;'+
  'uniform highp vec3 u_directLightColor\n;'+
  'uniform highp vec3 u_PointLightPos\n;'+
  'void main() {\n' +
  '  gl_Position = u_MvpMatrix * vec4(a_VertexPosition, 1.0);\n' +
  '  v_TextureCoord = a_TextureCoord;\n' +

  '  highp vec3 ambientLight = u_ambientLight;\n' +
  '  highp vec3 directionalLightColor = u_directLightColor;\n' +
  '  highp vec3 pointLightPosition = u_PointLightPos;\n' +
  '  vec4 vertexPosition = u_ModelMatrix * vec4(a_VertexPosition, 1.0);\n' +
  '  highp vec3 lightDirection = normalize(pointLightPosition - a_VertexPosition.xyz);\n' +
  '  highp vec4 transformedNormal = u_NormalMatrix * vec4(a_VertexNormal, 1.0);\n' +
  '  highp float directionalW = max(dot(transformedNormal.xyz, lightDirection), 0.0);\n' +
  '  v_Lighting = ambientLight + (directionalLightColor * directionalW);\n' +


  '}\n';

// Fragment shader program
var FSHADER_SOURCE =
  '#ifdef GL_ES\n' +
  'precision mediump float;\n' +
  '#endif\n' +
  'varying highp vec3 v_Lighting;\n' +
  'varying highp vec2 v_TextureCoord;\n' +
  'uniform sampler2D u_Sampler;\n' +
  'void main() {\n' +
  '  highp vec4 texelColor = texture2D(u_Sampler, vec2(v_TextureCoord.s, v_TextureCoord.t));\n' +
  '  gl_FragColor = vec4(texelColor.rgb * v_Lighting, texelColor.a);\n' +
  '}\n';

// var VSHADER_SOURCE =
//   'attribute highp vec3 a_VertexPosition;\n' +
//   'attribute highp vec2 a_TextureCoord;\n' +
//   'attribute highp vec3 a_VertexNormal;\n' +

//   'uniform highp mat4 u_NormalMatrix;\n' +
//   'uniform highp mat4 u_MvpMatrix;\n' +
//   'uniform highp mat4 u_ModelMatrix;\n' +

//   'varying highp vec2 v_TextureCoord;\n' +
//   'varying highp vec4 v_vertexPosition;\n' +
//   'varying highp vec4 v_TransformedNormal;\n' +

//   'varying highp vec3 v_Lighting;\n' +
//   'uniform highp vec3 u_ambientLight\n;'+
//   'uniform highp vec3 u_directLightColor\n;'+
//   'uniform highp vec3 u_PointLightPos\n;'+
//   'void main() {\n' +
//   '  gl_Position = u_MvpMatrix * vec4(a_VertexPosition, 1.0);\n' +

//   '  v_TextureCoord = a_TextureCoord;\n' +
//   '  v_vertexPosition = u_ModelMatrix * vec4(a_VertexPosition, 1.0);\n' +
//   '  v_TransformedNormal = u_NormalMatrix * vec4(a_VertexNormal, 1.0);\n' +

//   '}\n';

// // Fragment shader program
// var FSHADER_SOURCE =
//   '#ifdef GL_ES\n' +
//   'precision mediump float;\n' +
//   '#endif\n' +


//   'varying highp vec3 v_Lighting;\n' +

//   'varying highp vec2 v_TextureCoord;\n' +
//   'varying highp vec4 v_vertexPosition;\n' +
//   'varying highp vec4 v_TransformedNormal;\n' +

//   'uniform sampler2D u_Sampler;\n' +

//   'uniform highp vec3 u_ambientLight\n;'+
//   'uniform highp vec3 u_directLightColor\n;'+
//   'uniform highp vec3 u_PointLightPos\n;'+
//   'uniform highp vec3 u_PositionCamera\n;'+


//   'void main() {\n' +
//   '  highp vec3 ambientLight = u_ambientLight;\n' +
//   '  highp vec3 directionalLightColor = u_directLightColor;\n' +
//   '  highp vec3 pointLightPosition = u_PointLightPos;\n' +
//   '  highp vec3 PointLightingSpecularColor = vec3(1.0, 1.0, 1.0);\n' +

//   '  highp float materialShiness = 0.4;\n' +

//   '  highp vec3 normal = normalize(v_TransformedNormal.xyz);\n'+
//   '  highp vec3 eyeDirection = normalize(u_PositionCamera-v_vertexPosition.xyz);\n'+

//   '  highp vec3 lightDirection = normalize((pointLightPosition - v_vertexPosition.xyz));\n' +
//   '  highp vec3 reflectionDirection = reflect(-lightDirection, normal);\n'+

//   '  highp float specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), materialShiness);\n'+
//   '  highp float directionalW = max(dot(v_TransformedNormal.xyz, lightDirection), 0.0);\n' +

//   '  highp vec3 v_Lighting = ambientLight + (PointLightingSpecularColor * specularLightWeighting) + (directionalLightColor * directionalW);\n' + //

//   '  highp vec4 texelColor = texture2D(u_Sampler, vec2(v_TextureCoord.s, v_TextureCoord.t));\n' +
//   '  gl_FragColor = vec4(texelColor.rgb * v_Lighting.rgb, texelColor.a);\n' +


//   '}\n';


function Shape(vertices, TextureCoordinates, vertexIndices, vertexNormals, src) {

  var that = this;

  this.verticesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesBuffer);
  this.vertices = vertices;
  gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);

  this.textureCoordinates = TextureCoordinates;

  if (vertexNormals != ''){
    this.vertexNormals = vertexNormals;
    this.verticesNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertexNormals, gl.STATIC_DRAW);
  }

  this.vertexIndices = vertexIndices;
  this.numElements = this.vertexIndices.length;
  // this.numElements = 6;
  this.verticesTextureCoordBuffer = gl.createBuffer();
  this.verticesIndexBuffer = gl.createBuffer();


  gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesTextureCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, this.textureCoordinates, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.verticesIndexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.vertexIndices, gl.STATIC_DRAW);

  this.texture = gl.createTexture();
  var shapeImage = new Image();
  shapeImage.onload = function() { that.handleTextureLoaded(shapeImage); }
  shapeImage.src = src;

}

Shape.prototype.handleTextureLoaded = function(image)  {
  console.log("handleTextureLoaded, image = " + image.src+ "["+this.texture+"]");
  gl.bindTexture(gl.TEXTURE_2D, this.texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.bindTexture(gl.TEXTURE_2D, null);
}

Shape.prototype.preDraw = function() {

  var vertexPositionAttribute = gl.getAttribLocation(gl.program, "a_VertexPosition");
  var textureCoordAttribute = gl.getAttribLocation(gl.program, "a_TextureCoord");
  var vertexNormalAttribute = gl.getAttribLocation(gl.program, "a_VertexNormal");


  gl.enableVertexAttribArray(vertexPositionAttribute);
  gl.enableVertexAttribArray(textureCoordAttribute);
  gl.enableVertexAttribArray(vertexNormalAttribute);

  gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesNormalBuffer);
  gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesTextureCoordBuffer);
  gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, this.texture);
  gl.uniform1i(gl.getUniformLocation(gl.program, "u_Sampler"), 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.verticesIndexBuffer);


}

Shape.prototype.getModelMatrix = function() {
  return this.mMatrix;
}

function Enemy(pos, velocidad){
  this.pos = pos;
  this.velocidad = velocidad;

  this.move = function(despx) {
    this.pos.x = this.pos.x + despx;
  }
}


function cos(deg) {
  return Math.cos(deg * Math.PI / 180);
}
function sin(deg) {
  return Math.sin(deg * Math.PI / 180);
}

function updateReloj(){

  if(totalTiempo != 0){
      totalTiempo-=1;
      setTimeout("updateReloj()",1000);
  }

}


function main() {

    gl = getWebGLContext(canvas);
    if (!gl) {
      console.log('Failed to get the rendering context for WebGL');
      return;
    }

    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
      console.log('Failed to intialize shaders.');
      return;
    }


    if(gl) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
      gl.clearDepth(1.0);                 // Clear everything
      gl.enable(gl.DEPTH_TEST);           // Enable depth testing
      gl.depthFunc(gl.LEQUAL);            // Near things obscure far things


      var TheMaze = new Maze(MAZESZ);
      // TheMaze.determ(new Pos(0, 0));

      var posicion_libre = [];

      TheMaze.randPrim(new Pos(0, 0));
      var pos1 = TheMaze.pos;

      for (i = 0; i < TheMaze.sz; i++){
        for(j = 0; j < TheMaze.sz; j++){
          // var pos1 = new Pos(i,j);
          if(!TheMaze.iswall(i,j)){
            wall.push(new Pos(i,j));
          }else{
            posicion_libre.push(new Pos(i,j));
          }
        }
      }

      var pos2 = new Pos(Math.floor((Math.random() * 15)),Math.floor((Math.random() * 15)));

      while(!TheMaze.iswall(pos2.x, pos2.y)){
        pos2.x = Math.floor((Math.random() * 15));
        pos2.y = Math.floor((Math.random() * 15));
      }

      eyeX, eyeX1 = 7;
      eyeY, eyeY1 = 7;
      pos1.x = pos2.x;
      pos1.y = pos2.y;

      sky = new Shape(skyVertices, skyTextureCoordinates,skyVertexIndices,'','resources/c4.jpg');
      floor = new Shape(floorVertices, floorTextureCoordinates, floorVertexIndices,'', "resources/floor2.jpg");
      cube = new Shape(cubeVertices, cubeTextureCoordinates, cubeVertexIndices,cubeVertexNormals, "resources/caja.gif");
      person = new Shape(cubeVertices, cubeTextureCoordinates, cubeVertexIndices, cubeVertexNormals1, 'resources/varios.jpg');
      enemie = new Shape(cubeVertices, cubeTextureCoordinates, cubeVertexIndices,cubeVertexNormals,'resources/slender.jpg');

      for(i=0; i<num_enemies; i++){
          enemies[i] = new Enemy(posicionvacia(posicion_libre));
      }
      console.log(enemies);

      document.addEventListener('keydown', keydown, false);
      document.addEventListener('keyup', keyup, false);

      document.onkeydown = function(ev){ keycamera(ev, gl, u_MvpMatrix, mMatrix, vMatrix, pMatrix, mvpMatrix,TheMaze,pos1); };
      setInterval(function(){drawScene(gl, u_MvpMatrix, mMatrix, vMatrix, pMatrix, mvpMatrix,TheMaze, pos1)},50);
      setInterval(function(){keyhandler(pos1)},25);
      updateReloj();

 }  
}

function posicionvacia(posicion_libre){
  var i;
  var pos;
  i = Math.floor(posicion_libre.length * Math.random());
  pos = posicion_libre[i];
  posicion_libre.splice(i,1);
  return pos;
}

function keycamera(ev, gl, u_MvpMatrix, mMatrix, vMatrix, pMatrix, mvpMatrix,TheMaze,pos1) {

  if(ev.keyCode == 32){
    if(lamp == lamp_off){
      lamp = lamp_on;
    }else{
      lamp = lamp_off;
    }
   }

  if (ev.keyCode == 90){
    camera = (camera ? false:true);
  }

  drawScene(gl, u_MvpMatrix, mMatrix, vMatrix, pMatrix, mvpMatrix,TheMaze,pos1) ;

}

var down = true;
var up = true;

function keydown(ev){
  buttons[ev.keyCode]=true;
}

function keyup(ev){
  buttons[ev.keyCode]=false;
}


function keyhandler(pos1) {

    win = false;

    if (pos1.x != 0 && pos1.y != 0){

     if(buttons[58]) { // D 68
        if(!camera){
          eyeX1 += -sin(angle) * k;
         eyeY1 += cos(angle) * k;
        }else{
         eyeX1 -= -sin(angle) * k;
         eyeY1 -= cos(angle) * k;
        }
     } 
     if (buttons[65]) { // A 65
        if(!camera){
          eyeX1 -= -sin(angle) * k;
          eyeY1 -= cos(angle) * k;
        }else{
         eyeX1 += -sin(angle) * k;
         eyeY1 += cos(angle) * k;
        }
     }

     if(buttons[83]){ //S
      if(angle1 == 150 ){
        angle1 = angle1;
        down = false;
      }
      if(angle1 >=90 || angle1 <= 150){
        up = true;
      }
      if(down){
        angle1 += 2/0.5;
      }
     }

    if(buttons[87]){ //W
      if(angle1 == 18){
        angle1 = angle1;
        up = false;
      }
      if(angle1 >= 18 || angle1 <= 90){
        down = true;
      }
      if(up){
        angle1 -= 2/0.5;
      }
    }

     if (buttons[40]) { // Arrow Up
        if(!camera){
          eyeX1 += cos(angle) * k;
          eyeY1 += sin(angle) * k;
        }else{
           eyeX1 -= cos(angle) * k;
           eyeY1 -= sin(angle) * k;
        }

     }

     if (buttons[38]) { // Arrow Down
        if(!camera){
          eyeX1 -= cos(angle) * k;
          eyeY1 -= sin(angle) * k;
        }else{
          eyeX1 += cos(angle) * k;
          eyeY1 += sin(angle) * k;
        }

     }

     if(buttons[39]) { // 39 DERECHA 68
      if(camera){
        angle -= 2/0.5;
      }
     }
     if (buttons[37]) { // 37 IZQUIERDA 65
      if(camera){
        angle += 2/0.5;
      }
     }

     var inside = false;
     for (i = 0; i<wall.length; i++){
       if(eyeX1 > wall[i].x - 0.7 && eyeX1 < wall[i].x + 0.7 && eyeY1 > wall[i].y -0.7 && eyeY1 < wall[i].y + 0.7){
         inside = true;
       }
     }
     if(!camera){
        for (i = 0; i<wall.length; i++){
          if(eyeX1 > wall[i].x - 0.9 && eyeX1 < wall[i].x + 0.9 && eyeY1 > wall[i].y - 0.9 && eyeY1 < wall[i].y + 0.9){
            inside = true;
        }
     }
     }

     if(inside){
       eyeX1 = eyeX;
       eyeY1 = eyeY;
     }else{
       eyeX = eyeX1;
       eyeY = eyeY1;
     }
     pos1.x = Math.floor(eyeX + 0.5);
     pos1.y = Math.floor(eyeY + 0.5);
   }else{
     win = true;
   }

}


function drawScene(gl, u_MvpMatrix, mMatrix, vMatrix, pMatrix, mvpMatrix,TheMaze,pos1) {

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
  var u_PointLightPos = gl.getUniformLocation(gl.program, 'u_PointLightPos');
  var u_ambientLight = gl.getUniformLocation(gl.program, 'u_ambientLight');
  var u_directLightColor = gl.getUniformLocation(gl.program, 'u_directLightColor');
  // var u_PositionCamera = gl.getUniformLocation(gl.program, 'u_PositionCamera');

  var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');


  if(TheMaze.iswall(pos1.x, pos1.y)){
    TheMaze.pos = pos1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    TheMaze.draw(ctx, 10, 10, 10, 0);
  }else{
    pos1 = TheMaze.pos;
  }

  atX = eyeX + cos(angle);
  atY = eyeY + sin(angle);
  atZ = eyeZ + cos(angle1);

  if(camera){
    vMatrix.setLookAt(eyeX, eyeY, eyeZ, atX, atY, atZ, 0, 0, 1);
    mMatrix.setTranslate(7, 7, 0);
    mvpMatrix.set(pMatrix).multiply(vMatrix).multiply(mMatrix);
    gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

    sky.preDraw();
    gl.drawElements(gl.TRIANGLES, floor.numElements, gl.UNSIGNED_SHORT, 0);
  }else{
    //console.log(eyeX, eyeY);
    //vMatrix.setLookAt(Math.floor(eyeX + 0.5), Math.floor(eyeY +), 7, 7, 7, 0, -1, 0, 0);
    // mMatrix.setTranslate(eyeX, eyeY, 0);
    vMatrix.setLookAt(7, 7, 8, 7, 7, 5, 0, -1, 0);
    mMatrix.setTranslate(eyeX, eyeY, 0);
    mvpMatrix.set(pMatrix).multiply(vMatrix).multiply(mMatrix);
    gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

    person.preDraw();
    gl.drawElements(gl.TRIANGLES, person.numElements, gl.UNSIGNED_SHORT, 0);
  }
  console.log(lamp);
  
  pMatrix.setPerspective(90, canvas.width/canvas.height, 0.1, 100);

  gl.uniform3fv(u_ambientLight, ligth);

  gl.uniform3fv(u_directLightColor, lamp);
 
  // ligthpuntual = [eyeX, eyeY, eyeZ];
  ligthpuntual = [eyeX, eyeY, eyeZ];

  gl.uniform3fv(u_PointLightPos, ligthpuntual);

  // eyeposition = [eyeX, eyeY, eyeZ];
  // gl.uniform3fv(u_PositionCamera, eyeposition);

  gl.uniformMatrix4fv(u_ModelMatrix, false, mMatrix.elements);
  gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

  var normalMatrix = new Matrix4();
  normalMatrix.set(mMatrix);
  normalMatrix.invert();
  normalMatrix.transpose();
  var nUniform = gl.getUniformLocation(gl.program, "u_NormalMatrix");
  gl.uniformMatrix4fv(nUniform, false, normalMatrix.elements);

  for (i = 0; i < wall.length; i++){
      mMatrix.setTranslate(wall[i].x, wall[i].y, 0);
      mvpMatrix.set(pMatrix).multiply(vMatrix).multiply(mMatrix);
      gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

      cube.preDraw();
      gl.drawElements(gl.TRIANGLES, cube.numElements, gl.UNSIGNED_SHORT, 0);
  }


  for (i=0; i<enemies.length; i++){
    mMatrix.setTranslate(enemies[i].pos.x, enemies[i].pos.y, 0);
    mvpMatrix.set(pMatrix).multiply(vMatrix).multiply(mMatrix);
    gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

    enemie.preDraw();
    gl.drawElements(gl.TRIANGLES, enemie.numElements, gl.UNSIGNED_SHORT, 0);
  }

  mMatrix.setTranslate(7, 7, 0);
  mvpMatrix.set(pMatrix).multiply(vMatrix).multiply(mMatrix);
  gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

  floor.preDraw();
  gl.drawElements(gl.TRIANGLES, floor.numElements, gl.UNSIGNED_SHORT, 0);


  // ctx.fillStyle = 'red';
  // ctx.font = '30pt VTFMisterPixelRegular';
  // ctx.fillText(totalTiempo, (canvas.width)-50, 50);
  // ctx.fillStyle = 'white';
  // ctx.font = '15pt VTFMisterPixelRegular';
  // var control0 = 'CONTROL:';
  // ctx.fillText(control0, 20, (canvas.height)-80)
  // var control = 'TO MOVE: Arrow up and down, A and D left and right';
  // ctx.fillText(control, 20, (canvas.height)-50)
  // var control1 = 'TO CONTROL CAMERA: Arrow left and right, W and S up and down';
  // ctx.fillText(control1, 20, (canvas.height)-30)
  // var control3 = 'LANTERN: Space';
  // ctx.fillText(control3, 20, (canvas.height)-10)


  if(win){
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.font = '50pt VTFMisterPixelRegular';
    ctx.fillText('YOU WIN',canvas.width/2-140, canvas.height/2);
  }else{
    if(totalTiempo==0){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      ctx.fillStyle = 'red';
      ctx.font = '50pt VTFMisterPixelRegular';
      ctx.fillText('GAME OVER',canvas.width/2-180, canvas.height/2);
    }
  }

}


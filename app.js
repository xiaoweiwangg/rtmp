let express=require("express")
let app=express()
app.use("/",express.static("./"))
var cmd=require('node-cmd');
  
    cmd.get(
        'ffmpeg -i ./mv.mp4 -c copy -map 0 -f segment -segment_list ./v_map/mv.m3u8 -segment_time 5  ./v_map/mv-%03d.ts',//画图板
    function(data){
        console.log("执行完成！")
        }
    );
  
    // cmd.get(
    //     'C:\\Windows\\System32\\Calc.exe', //计算器
    // function(data){
    //     console.log("cacul")
    // }
// );
  
//  cmd.run('touch example.created.file');
 //　notepad--------打开记事本
 //'mspaint' 画图板
app.listen(8080)
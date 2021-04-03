function ClickVideo() {
    var $ifd = $("iframe").contents().find("iframe").contents();
    $ifd.find("div").filter(".video-click-to-play-link").click();
}
function BanVolunm() {
    var $ifd = $("iframe").contents().find("iframe").contents();
    $ifd.find("div").filter(".volume-wrapper").children().eq(0).click();
}
function ChangeRate() {
    var $ifd = $("iframe").contents().find("iframe").contents();
    $ifd.find("select").val(1.5).change();
    $ifd.find("select").val(2).change();
}
function play(){

    ClickVideo();//打开视频
    BanVolunm();
    ChangeRate();
    //2倍速
    var test2 = setInterval(function(){
        var $ifd = $("iframe").contents().find("iframe").contents();
        $ifd.find("div").filter(".play-progress").css("width");
        var jindu = $ifd.find("div").filter(".play-progress").css("width");

        if (jindu == "100%") {
            //var ihref = document.getElementById("next-activity-link").href;
            //window.location.href = ihref;//视频播放结束则点击下一个
            backContent();
        }
    },1000)
}

function isEnd() {
    var $ifd = $("iframe").contents().find("iframe").contents();
    $ifd.find("div").filter(".play-progress").css("width") == "100%";
    var jindu = $ifd.find("div").filter(".play-progress").css("width");

    if (jindu == "100%") {
        backContent();//视频播放结束则点击下一个
    }
}

//function nextPlay() {
//    var ihref = document.getElementById("next-activity-link").href;
 //   window.location.href = ihref;
//}

function clickinput() {
    while($("input.btn-primary")) {
        $("input.btn-primary").click();
        break;
    }
}

selectOne();
clickinput();

var test1 = setTimeout(function(){
    play();
},5000);


function backContent() {
    $("span").find("a").eq(2).children().click();

}

function selectOne() {
    while($("li").filter(".modtype_scorm")){
        for(let i = 0;i<$("li").filter(".modtype_scorm").length;i++) {
            var j = 0;
            var scormTitleNum = $("li").filter(".modtype_scorm").eq(i).find("img").eq(1).attr("title").search("未完成");
            //titleNum < 0说明完成了，则索引加1，既看下一个目标
            if (scormTitleNum < 0) {
                j++;
            }
            else if($("li").filter(".modtype_scorm").eq(i).find("input")) {
                //第j个时未完成的，所以直接点击进入就可以了;如果未完成再试试可以不可以完成，
                // 所以先用if判断，如果可以就点击，不可以点击下一个
                //索引成功就点击
                $("li").filter(".modtype_scorm").eq(i).find("button").click();
                //然后索引加1
                j++;
            }
            //既没有完成又不可以点击完成，就直接进入
            else{
                $("li").filter(".modtype_scorm").eq(j).find("span").click();
            }

        }
        /*if(j = $("li").filter(".modtype_forum").length){
            for(let i = 0;i<$("li").filter(".modtype_forum").length;i++){
                let ij = 1;
                var forumTitleNum = $("li").filter(".modtype_forum").eq(i).find("img").eq(1).attr("title").search("未完成");
                if(forumTitleNum<0){
                    ij++;
                }
                else if($("li").filter(".modtype_forum").eq(i).find("input")){
                    $("li").filter(".modtype_forum").eq(i).find("button").click();
                    ij++;
                }
                else {
                    $("li").filter(".modtype_forum").eq(ij).find("span").click();
                    copyText();
                }
            }
        }*/
        if(j = $("li").filter(".modtype_quiz").length){
            for(let i = 0;i<$("li").filter(".modtype_quiz").length;i++){
                let ij = 1;
                var quizTitleNum = $("li").filter(".modtype_quiz").eq(i).find("img").eq(1).attr("title").search("未完成");
                if(quizTitleNum<0){
                    ij++;
                }
                else if($("li").filter(".modtype_quiz").eq(i).find("input")){
                    $("li").filter(".modtype_quiz").eq(i).find("button").click();
                    ij++;
                }
                else {
                    $("li").filter(".modtype_quiz").eq(ij).find("span").click();
                    autoQuiz();
                }
            }
        }
        if(qij = $("li").filter(".modtype_quiz").length){
            //返回最初目录，点击下一个章节
            $(".rarrow").eq(1).click();
        }
    }
}

//function copyText() {

//}

function autoQuiz() {

}

//如上是视频阶段，openVideo()失败，既j = $("li").filter(".modtype_scorm").length的时候


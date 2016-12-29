/**
 * Created by mfhj-dz-001-424 on 16/12/28.
 */

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    /* staticTag很重要,影响到保存,取消,编辑,设置input是否只读,初始值等等*/
    $scope.staticTag=1 ; //1 代表是创建新的,2代表是编辑旧的.
    /*尽调概况*/
    $scope.basicFact={};
    //
    $scope.basicFact.jigouName=null; //机构全称
    $scope.basicFact.applyDate=null; //申请日期
    $scope.basicFact.jinrongConsult=null; //金融顾问
    $scope.basicFact.recordSoundYes=false;   // 录音 true 代表选中
    $scope.basicFact.recordSoundNo=false;  // 未录音, true代表选中
    //
    $scope.basicFact.materialCompleteDoneDate=null; //资料补全日期
    $scope.basicFact.liveRiskMan=null;    //现场风控人
    $scope.basicFact.recordVedioYes=false;   //视频 ,true代表选中
    $scope.basicFact.recordVedioYes=false; // 未视频,true代表选中
    //
    $scope.basicFact.surveyBeginDate=null ; //尽调开始日期
    $scope.basicFact.surveyMethod=["实地","远程","无尽调"];     //尽调方式
    $scope.basicFact.surveyMethodModel=null; //用来接收尽调方式选择后的值
    $scope.basicFact.surveyProgress=["机构已申请", "尽调已发邮件", "资料不全","资料齐全"];   // 尽调准备进度,需要从服务端获取
    $scope.basicFact.surveyProgressModel=null; //用来接收尽调准备进度选择后的接受值

});
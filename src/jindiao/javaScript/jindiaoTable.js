/**
 * Created by mfhj-dz-001-424 on 16/12/28.
 * 如果是编辑查看,控件初始值通过从服务器获取数据,赋值给$scope 相关数据域实现.此时点击取消,用获取的值恢复即可.
 * 如果是新建文档,控件的初始值,就直接取自$scope的默认值,此时点击取消,直接设置相关的$scope数据域即可
 * 通过$scope.staticTag 来区分是新建尽调还是编辑以前的尽调
 */

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    /* staticTag很重要,影响到保存,取消,编辑,设置input是否只读,初始值,权限等等*/
    $scope.staticTag=1 ; //1 代表是创建新的,2代表是编辑旧的.
    /********************************************尽调概况************************************************/
    /*相关数据域*/
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

    /*这个是控制相关数据域是否只读的,如果 $scope.staticTag=1,全部可编辑,否则通过设置true只读,点击取消保存和编辑均需要改变这里的值*/
    $scope.basicFact.jigouNameCtr=true; //机构全称是否可编辑
    $scope.basicFact.applyDateCtr=false; //申请日期是否可编辑
    $scope.basicFact.jinrongConsultCtr=false; //金融顾问是否可编辑
    $scope.basicFact.recordSoundYesCtr=false;   // 录音 是否可编辑
    $scope.basicFact.recordSoundNoCtr=false;  // 未录音,是否可编辑
    //
    $scope.basicFact.materialCompleteDoneDateCtr=false; //资料补全日期是否可编辑
    $scope.basicFact.liveRiskManCtr=false;    //现场风控人是否可编辑
    $scope.basicFact.recordVedioYesCtr=false;   //视频 是否可编辑
    $scope.basicFact.recordVedioYesCtr=false; // 未视频,是否可编辑
    //
    $scope.basicFact.surveyBeginDateCtr=false ; //尽调开始日期是否可编辑
    $scope.basicFact.surveyMethodCtr=false;     //尽调方式是否可编辑
    $scope.basicFact.surveyMethodModelCtr=false; //用来接收尽调方式选择后的值是否可编辑
    $scope.basicFact.surveyProgressCtr=false   // 尽调准备进度,需要从服务端获取是否可编辑
    $scope.basicFact.surveyProgressModelCtr=false; //用来接收尽调准备进度选择后的接受值是否可编辑

});









































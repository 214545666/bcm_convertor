(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[18],{

/***/ "./src/i18n/zh_TW.ts":
/*!***************************!*\
  !*** ./src/i18n/zh_TW.ts ***!
  \***************************/
/*! exports provided: zh_TW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zh_TW", function() { return zh_TW; });
var zh_TW = {
  audio: {
    'sound_player/ios_webm_error': '該設備暫時不支持播放錄音音頻',
    'sound_player/block_no_network': '無網絡連接，作品中一些積木無法正常運行',
    'voice_detection/not_found_error': '無錄音設備，無法進行偵測',
    'voice_detection/pc_permission_error': '未開啟聲音偵測權限，快去設置吧',
    'voice_detection/no_supported_error': '你的瀏覽器不支持錄音，建議下載最新的谷歌瀏覽器',
    'voice_detection/ios_wechat_error': '微信端暫不支持聲音偵測功能，可以在safari瀏覽器中運行作品',
    'voice_detection/ios_permission_error': '未獲取到錄音權限',
    'voice_detection/ios_version_error': '系統版本太低，無法使用聲音偵測',
    'voice_detection/android_permission_error': '未獲取到錄音權限，建議用微信掃一掃打開',
    'record_error/pc_browser_not_support': '你的瀏覽器不支持錄音，建議下載最新的谷歌瀏覽器',
    'record_error/device_error': '妳的電腦沒有錄音設備，無法錄音',
    'record_error/pc_permission_error': '需要開啟瀏覽器錄音設備',
    'record_error/pc_other_case': '你的瀏覽器不支持錄音',
    'record_error/ios_permission_error': '未獲得錄音權限',
    'record_error/ios_other_case': '你的設備不支持錄音',
    'record_error/android_permission_error': '未獲取到錄音權限，建議用微信掃一掃打開',
    'record_error/android_other_case': '你的設備不支持錄音',
    'say/not_support': '該瀏覽器不支持說此類語言'
  },
  cloud_variables: {
    wechat_not_logged_in_user: '微信用戶',
    not_logged_in_user: '未登錄用戶'
  },
  codemao_ai: {
    'ml_model_dialog/default_name': '模型1',
    'matrix_dialog/default_name': '矩陣',
    'matrix_dialog/up_down_distribution': '上下分佈矩陣',
    'matrix_dialog/left_right_distribution': '左右分布矩陣',
    'matrix_dialog/round_distribution': '圓形分布矩陣',
    'matrix_dialog/spiral_distribution': '螺旋分布矩陣',
    'bad_network_notice': '當前網絡不給力，請稍後再試',
    'not_support_yet': '當前環境暫不支持開啓人臉識別，敬請期待',
    // options for get_emotion
    happy: '高興',
    fear: '恐懼',
    angry: '憤怒',
    disgust: '厭惡',
    sad: '傷心',
    surprise: '驚訝',
    neutral: '平靜',
    pouty: '嘟嘴',
    grimace: '鬼臉',
    // options for get_gender
    male: '男生',
    female: '女生',
    // options for get_glasses
    sun: '墨鏡',
    common: '普通眼鏡',
    none: '無眼鏡',
    // options for get_face_shape
    square: '方臉',
    triangle: '梨形臉',
    oval: '鵝蛋臉',
    heart: '心形臉',
    round: '圓臉'
  },
  theatre: {
    close: '關閉',
    pointer_get_color_error: '當前無法用取色器從舞台取色，請啟動webgl或著查看顯卡是否支持webgl',
    empty_list: '空',
    recorder_start: '點擊說話',
    recorder_record: '點擊錄音',
    recorder_recording: '錄音中...',
    recorder_recognizing: '識別中...',
    recorder_finish: '錄音已完成',
    recorder_playing: '錄音播放中...',
    recorder_play_succeed: '播放成功，請選擇上傳或者重錄！',
    recorder_play_fail: '播放失敗，建議重錄。否則對應積木無法播放聲音！',
    recorder_error: '出錯啦! 請再次嘗試~',
    recorder_timeout: '錄音時間最長為30s，正在幫你識別',
    recorder_undefined: '無法啟用錄音功能，返回結果undefined',
    recorder_restart: '重錄',
    recorder_play: '播放',
    recorder_clear: '清空',
    recorder_confirm: '確認',
    recorder_language_fail: '微信端識別英文的功能暫未開通！',
    recorder_no_network: '無網絡連結，請先檢查網絡',
    recorder_time_left_pre: '還剩 ',
    recorder_time_left_post: ' 秒',
    // camera
    camera_support_platform: '拍攝模式目前僅支持安卓手機',
    camera_no_network: '網絡斷開，無法使用該功能',
    // video
    load_video_error_notice: '網絡異常，視頻丟失',
    // notice
    webgl_supported_error: '未開啟WebGL，作品中一些積木無法正常運行',
    second: '秒'
  },
  default_functions: {
    ascii_not_support_error: '無法支持ascii碼',
    next: '点击继续',
    original_text: '原文',
    translation: '譯文',
    zh: '中文',
    en: '英文',
    wyw: '文言文',
    fra: '法語',
    spa: '西班牙語',
    jp: '日語',
    // camera
    camera_device_error: '攝像頭權限未開啓，或當前環境暫不支持',
    camera_permission_error: '為開啟攝像頭偵測權限，快去設置吧',
    camera_qr_not_wechat_error: '二維碼模式當前僅支持在微信端開啟',
    // video
    block_no_network: '無網絡連接，作品中一些積木無法正常運行',
    mobile_video_failure: '該視頻無法在移動端運行，請用電腦打開',
    // wood
    wood_running: '海龜函數運行中...',
    // day names
    day_names_0: '星期日',
    day_names_1: '星期一',
    day_names_2: '星期二',
    day_names_3: '星期三',
    day_names_4: '星期四',
    day_names_5: '星期五',
    day_names_6: '星期六'
  },
  kitten: {
    'language': 'tw',
    'publish': '發布',
    'load_images': '正在載入圖片資源',
    'load_sounds': '正在載入聲音資源',
    'wx_share_message': '我在編程貓發現這個作品很有趣，快來看看！',
    'player_error_notice': '作品積木還有點小問題,請等待作者調試哦~',
    'player_load_error': '打開作品失敗',
    'player_load_error_notice': '即將打開上一個版本',
    'bcm_application_version_higher_than_current': 'BCM版本過高暫時無法運行',
    'player_load_default_notice': '即將打開默認作品',
    'disconnect_tips': '源碼世界斷網啦！請檢查網絡連接',
    'browser_tips/incompatible_browser': '當前瀏覽器無法正常運行該網頁，使用Chrome谷歌瀏覽器，或下載源碼客戶端，獲得完整功能體驗。',
    'browser_tips/old_browser_version': '當前瀏覽器版本較低，更新Chrome谷歌瀏覽器，或下載源碼客戶端，獲得完整功能體驗。',
    'browser_tips/incompatible_device': '推薦在PC端運行該網頁，或下載編程貓Nemo，體驗手機編程的樂趣。',
    'opening_the_camera': '正在打開照相機',
    'no_results_were_identified': '未識別到結果',
    'scan_result_title': '掃描到以下內容',
    'click_continue': '點擊返回遊戲',
    'not_provided_by_codemao': '掃描所得內容並非編程貓提供',
    'scan_qrcode': '識別二維碼',
    'qrcode_camera_loading': '圖像加載中',
    'camera_slow_network': '當前網絡不佳，請檢查網絡連接',
    'please_use_with_caution': '請謹慎使用',
    'visit_the_website': '訪問網站',
    'publish/finish': '完成',
    'ml_diagram/training_time': '訓練次數',
    'ml_diagram/input_layer': '輸入層',
    'ml_diagram/output_layer': '輸出層',
    'ml_diagram/layer': '神經網絡隱含層',
    'ml_diagram/unsupport_graph': '当前模型不支持图像显示',
    'auto_player_default_model_name': 'model one',
    'auto_player_no_corresponding_data': '--',
    'auto_player_running': '運行中',
    'auto_player_nth_generation': 'nth_generation_tw',
    'auto_player_highest_score': '最高分數',
    'auto_player_iteration_num': '叠代次數',
    'auto_player_score_record': '分數記錄',
    'auto_player_action_data_record': '數據記錄',
    'auto_player_quick_mode': '快速模式',
    'auto_player_normal_mode': '正常模式',
    'auto_player_save_button_content': '優化模型並停止程序',
    'action': '行為',
    'no_action': '不操作',
    'backPropagation': '後向傳播算法',
    'evolution': '遺傳算法',
    'unknown_algorithm': '未知算法',
    'unknown_title': '未知標題',
    'unknown_mode': '未知模式',
    'block_lab': '積木實驗室',
    'block_option': '積木功能選擇',
    'block_read_more': '查看詳細攻略',
    'block_confirm': '確認添加',
    'ai_classification_name': '分類AI',
    'ai_classification_description': '【AI】分類AI能夠訓練分類模型與預測分類結果。通過該功能，用戶可以製作如酒類識別、疾病判斷等基於分類AI的應用程序。',
    'ai_game_name': 'GameAI',
    'ai_game_description': '【AI】GameAI可以訓練神經網絡模型，角色加載模型可以做到AI自動遊戲。用戶通過GameAI功能，可以製作AI玩FlappyBird、AI玩飛機大戰等遊戲及應用。',
    'cloud_variable/wechat_login': '微信登錄',
    'cloud_variable/user_login': '賬號登錄',
    'cloud_variable/wechat_logout': '退出',
    'cloud_variable/logged_in': '作品中包含“雲數據”的相關功能',
    'cloud_variable/not_logged_in': '用戶未登錄，無法使用“雲數據”相關功能',
    'cloud_variable/connect_error': '雲數據相關功能失效，請檢查網絡連接',
    'cloud_variable/ranking/loading-error-1': '網絡連接異常...',
    'cloud_variable/ranking/loading-error-2': '排行榜獲取失敗',
    'cloud_variable/ranking/loading-error-preview': '預覽模式下，雲數據會以本地形式運行',
    'cloud_variable/ranking': '排行榜',
    'cloud_variable/not_logged_in_user': '未登錄用戶',
    'cloud_variable/no_update': '調試模式下無法修改雲變量的值',
    'cloud_variable/anonymous_user': '匿名用戶',
    'sign_in_dialog/password_error': '密碼格式錯誤，至少包含6個字符或數字',
    'sign_in_dialog/password_empty': '密碼不能為空',
    'sign_in_dialog/mobile_empty': '手機號不能為空',
    'sign_in_dialog/email_empty': '郵箱不能為空',
    'sign_in_dialog/email_error': '郵箱格式不正確',
    'sign_in_dialog/email_often': '郵件發送過於頻繁',
    'sign_in_dialog/error/other/acc_or_pwd': '用戶名或密碼不正確',
    'sign_in_dialog/code_send_success': '驗證碼已發送到該手機號',
    'sign_in_dialog/empty_account': '用戶名不能為空',
    'sign_in_dialog/empty_password': '密碼不能為空',
    'sign_in_dialog/empty_code': '驗證碼不能為空',
    'sign_in_dialog/register_error': '註冊失敗',
    'sign_in_dialog/error/other/network': '網絡連接出錯了,請稍後再試',
    'sign_in_dialog/exist_error': '註冊失敗，帳號已經存在',
    'sign_in_dialog/code_error': '獲取驗證碼失敗，請重新嘗試',
    'sign_in_dialog/btn_resend': '重新發送',
    'sign_in_dialog/btn_code': '獲取驗證碼',
    'sign_in_dialog/not_exist_error': '帳號不存在，請輸入已註冊的郵箱',
    'sign_in_dialog/reset_email_sent': '已发送重置密码邮件，请及时查收',
    'sign_in_dialog/reset_limit_error': '今天重置密碼發送郵件已達上限',
    'sign_in_dialog/unknown_error': '未知錯誤',
    'sign_in_dialog/register': '註冊',
    'sign_in_dialog/login': '登入',
    'sign_in_dialog/third_party': '第三方登入',
    'sign_in_dialog/to_register': '已有賬號？立即登入',
    'sign_in_dialog/register_with_phone': '使用手機號註冊',
    'sign_in_dialog/register_with_email': '使用郵箱註冊',
    'sign_in_dialog/code': '獲取驗證碼',
    'sign_in_dialog/resend': '重新發送',
    'sign_in_dialog/login_now': '立即登入',
    'sign_in_dialog/register_now': '立即註冊',
    'sign_in_dialog/bonus': '手機註冊贈送500金幣和黃金源碼蛋',
    'sign_in_dialog/placeholder/username': '手機/郵箱/用户名',
    'sign_in_dialog/placeholder/password': '密碼',
    'sign_in_dialog/placeholder/password_n_tip': '密碼（6-20位）',
    'sign_in_dialog/placeholder/password_confirm': '再次輸入密碼',
    'sign_in_dialog/placeholder/code': '驗證碼',
    'sign_in_dialog/placeholder/phone': '手機號',
    'sign_in_dialog/placeholder/email': '郵箱',
    'sign_in_dialog/register_success/phone_title': '註冊成功！',
    'sign_in_dialog/register_success/phone_success_content_1': '恭喜你！你的賬號',
    'sign_in_dialog/register_success/phone_success_content_2': '已經完成註冊',
    'sign_in_dialog/register_success/phone_btn_content': '立即登入',
    'sign_in_dialog/register_success/email_title': '驗證郵件已發出',
    'sign_in_dialog/register_success/email_success_content_1': '請在24小時內登入郵箱',
    'sign_in_dialog/register_success/email_success_content_2': '並按郵件提示進行操作完成驗證',
    'sign_in_dialog/register_success/email_btn_content': '我知道了',
    'sign_in_dialog/forget_password/email': '請輸入郵箱',
    'sign_in_dialog/forget_password/entry': '忘記密碼？',
    'sign_in_dialog/sign_in_with_password': '密碼登錄',
    'sign_in_dialog/sign_in_with_sms': '短信登錄',
    'sign_in_dialog/find_password': '找回密碼',
    'sign_in_dialog/sign_up_account': '賬號註冊',
    'sign_in_dialog/mobile_phone': '手機',
    'sign_in_dialog/new_user_sign_up': '新用户註冊',
    'sign_in_dialog/reset_password': '重置密碼',
    'sign_in_dialog/back_to_login': '返回登錄',
    'sign_in_dialog/next': '下一步',
    'sign_in_dialog/forget_password/verify': '驗證身份後，可重置密碼',
    'sign_in_dialog/forget_password/set_password': '請設置你的新密碼',
    'sign_in_dialog/forget_password/success': '密碼重置成功',
    'sign_in_dialog/go_to_login': '去登錄',
    'sign_in_dialog/login_success': '登錄成功',
    'sign_in_dialog/error/sms_code/fail': '驗證碼錯誤，請重新輸入',
    'sign_in_dialog/error/phone/format': '手機格式不正確',
    'sign_in_dialog/error/phone/unregisterd': '手機號未註冊，',
    'sign_in_dialog/error/phone/registered': '手機號已註冊，',
    'sign_in_dialog/error/password/format': '請輸入6-20位密碼',
    'sign_in_dialog/error/password_confirm/not_same': '兩次輸入的密碼不一致，請重新輸入',
    'sign_in_dialog/register_success_then_login': '註冊成功，已為你登錄賬號',
    'theatre/ascii_not_support_error': '該設備暫時不支持符號碼特效功能',
    'theatre/recorder_error': '出錯啦! 請再次嘗試~',
    'theatre/recorder_no_network': '無網絡連結，請先檢查網絡',
    'ios_webm_error': '該設備暫時不支持播放錄音音頻',
    'block_no_network': '無網絡連接，作品中一些積木無法正常運行',
    'hardware/load_tips': '作品中包含的“硬件”積木暫時無法運行',
    'hardware/blocks_running_notice': '硬件積木暫時無法運行',
    'face_detect/title': '人臉識別',
    'face_detect/camera_permission_error': '未開啟攝像頭拍攝權限，快去設置吧',
    'face_detect/camera_device_error': '該設備暫時不支持攝像頭拍攝功能',
    'face_detect/uploading': '正在檢測中，請耐心等待～',
    'bad_network_notice': '當前網絡不給力，請稍後再試',
    'face_detect/upload_error': '網路不給力，上傳失敗',
    'face_detect/upload_img': '上傳人臉',
    'face_detect/capture': '拍照',
    'face_detect/cancel': '取消',
    'face_detect/confirm': '確定',
    'face_detect/loading': '圖像加載中',
    'face_detect/camera_unavailable': '無法打開攝像頭',
    'face_detect/upload_img_tips': '直接上傳人臉圖片吧～',
    'face_detect/no_face_detect_permission': '獲取人臉識別權限失敗，無法識別人臉',
    'face_detect/file_limit': '只能上傳 jpg、jpeg、png、bmp 格式的文件',
    'wood/wood_running_notification': '海龜積木暫時無法運行',
    'request_error/bad_request': '程序加載出錯，請稍後再試',
    'request_error/server_error': '服務器無響應，請稍後再試',
    'request_error/timeout': '網絡連接超時，請稍後再試',
    'request_error/server_connection_error': '服務器連接錯誤，請稍後再試',
    'request_error/unknown_error': '未知錯誤，請刷新後重試',
    'resource_error': '存在受損的圖片或聲音資源，請替換正確資源',
    'request_error/translate_times_reach_limit': '設備今日已超過調用上限，無法使用翻譯功能',
    'request_error/backend_connect_baidu_translate_fail': '網絡異常，翻譯積木無法運行，請重試',
    'request_error/work_translate_times_limit': '數據異常，等待作者更正',
    'notice/not_signed_in': '本作品含有云數據相關功能，登錄後才能正常運行',
    'tips/not_logged_in': '用戶未登錄，無法使用“雲數據及認知AI”相關功能',
    'device_orientation_not_support': '當前環境不支持傾斜偵測',
    'catui2/sign_in_tip_text': '你還未登錄，登錄後體驗更棒哦～',
    'catui2/sign_in_btn_text': '立即登錄',
    // physics2
    'elastic_body_supported_warning': '當前環境對柔軟材質的支持較弱'
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(zh_TW, "zh_TW", "/Applications/project/kitten-player/src/i18n/zh_TW.ts");
}();

;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaTE4bi96aF9UVy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgemhfVFcgPSB7XG4gIGF1ZGlvOiB7XG4gICAgJ3NvdW5kX3BsYXllci9pb3Nfd2VibV9lcnJvcic6ICfoqbLoqK3lgpnmmqvmmYLkuI3mlK/mjIHmkq3mlL7pjITpn7Ppn7PpoLsnLFxuICAgICdzb3VuZF9wbGF5ZXIvYmxvY2tfbm9fbmV0d29yayc6ICfnhKHntrLntaHpgKPmjqXvvIzkvZzlk4HkuK3kuIDkupvnqY3mnKjnhKHms5XmraPluLjpgYvooYwnLFxuXG4gICAgJ3ZvaWNlX2RldGVjdGlvbi9ub3RfZm91bmRfZXJyb3InOiAn54Sh6YyE6Z+z6Kit5YKZ77yM54Sh5rOV6YCy6KGM5YG15risJyxcbiAgICAndm9pY2VfZGV0ZWN0aW9uL3BjX3Blcm1pc3Npb25fZXJyb3InOiAn5pyq6ZaL5ZWf6IGy6Z+z5YG15ris5qyK6ZmQ77yM5b+r5Y676Kit572u5ZCnJyxcbiAgICAndm9pY2VfZGV0ZWN0aW9uL25vX3N1cHBvcnRlZF9lcnJvcic6ICfkvaDnmoTngI/opr3lmajkuI3mlK/mjIHpjITpn7PvvIzlu7rorbDkuIvovInmnIDmlrDnmoTosLfmrYzngI/opr3lmagnLFxuICAgICd2b2ljZV9kZXRlY3Rpb24vaW9zX3dlY2hhdF9lcnJvcic6ICflvq7kv6Hnq6/mmqvkuI3mlK/mjIHogbLpn7PlgbXmuKzlip/og73vvIzlj6/ku6XlnKhzYWZhcmnngI/opr3lmajkuK3pgYvooYzkvZzlk4EnLFxuICAgICd2b2ljZV9kZXRlY3Rpb24vaW9zX3Blcm1pc3Npb25fZXJyb3InOiAn5pyq542y5Y+W5Yiw6YyE6Z+z5qyK6ZmQJyxcbiAgICAndm9pY2VfZGV0ZWN0aW9uL2lvc192ZXJzaW9uX2Vycm9yJzogJ+ezu+e1seeJiOacrOWkquS9ju+8jOeEoeazleS9v+eUqOiBsumfs+WBtea4rCcsXG4gICAgJ3ZvaWNlX2RldGVjdGlvbi9hbmRyb2lkX3Blcm1pc3Npb25fZXJyb3InOiAn5pyq542y5Y+W5Yiw6YyE6Z+z5qyK6ZmQ77yM5bu66K2w55So5b6u5L+h5o6D5LiA5o6D5omT6ZaLJyxcblxuICAgICdyZWNvcmRfZXJyb3IvcGNfYnJvd3Nlcl9ub3Rfc3VwcG9ydCc6ICfkvaDnmoTngI/opr3lmajkuI3mlK/mjIHpjITpn7PvvIzlu7rorbDkuIvovInmnIDmlrDnmoTosLfmrYzngI/opr3lmagnLFxuICAgICdyZWNvcmRfZXJyb3IvZGV2aWNlX2Vycm9yJzogJ+Wms+eahOmbu+iFpuaykuaciemMhOmfs+ioreWCme+8jOeEoeazlemMhOmfsycsXG4gICAgJ3JlY29yZF9lcnJvci9wY19wZXJtaXNzaW9uX2Vycm9yJzogJ+mcgOimgemWi+WVn+eAj+imveWZqOmMhOmfs+ioreWCmScsXG4gICAgJ3JlY29yZF9lcnJvci9wY19vdGhlcl9jYXNlJzogJ+S9oOeahOeAj+imveWZqOS4jeaUr+aMgemMhOmfsycsXG4gICAgJ3JlY29yZF9lcnJvci9pb3NfcGVybWlzc2lvbl9lcnJvcic6ICfmnKrnjbLlvpfpjITpn7PmrIrpmZAnLFxuICAgICdyZWNvcmRfZXJyb3IvaW9zX290aGVyX2Nhc2UnOiAn5L2g55qE6Kit5YKZ5LiN5pSv5oyB6YyE6Z+zJyxcbiAgICAncmVjb3JkX2Vycm9yL2FuZHJvaWRfcGVybWlzc2lvbl9lcnJvcic6ICfmnKrnjbLlj5bliLDpjITpn7PmrIrpmZDvvIzlu7rorbDnlKjlvq7kv6HmjoPkuIDmjoPmiZPplosnLFxuICAgICdyZWNvcmRfZXJyb3IvYW5kcm9pZF9vdGhlcl9jYXNlJzogJ+S9oOeahOioreWCmeS4jeaUr+aMgemMhOmfsycsXG5cbiAgICAnc2F5L25vdF9zdXBwb3J0JzogJ+ipsueAj+imveWZqOS4jeaUr+aMgeiqquatpOmhnuiqnuiogCcsXG4gIH0sXG4gIGNsb3VkX3ZhcmlhYmxlczoge1xuICAgIHdlY2hhdF9ub3RfbG9nZ2VkX2luX3VzZXI6ICflvq7kv6HnlKjmiLYnLFxuICAgIG5vdF9sb2dnZWRfaW5fdXNlcjogJ+acqueZu+mMhOeUqOaIticsXG4gIH0sXG4gIGNvZGVtYW9fYWk6IHtcbiAgICAnbWxfbW9kZWxfZGlhbG9nL2RlZmF1bHRfbmFtZSc6ICfmqKHlnosxJyxcbiAgICAnbWF0cml4X2RpYWxvZy9kZWZhdWx0X25hbWUnOiAn55+p6ZmjJyxcbiAgICAnbWF0cml4X2RpYWxvZy91cF9kb3duX2Rpc3RyaWJ1dGlvbic6ICfkuIrkuIvliIbkvYjnn6npmaMnLFxuICAgICdtYXRyaXhfZGlhbG9nL2xlZnRfcmlnaHRfZGlzdHJpYnV0aW9uJzogJ+W3puWPs+WIhuW4g+efqemZoycsXG4gICAgJ21hdHJpeF9kaWFsb2cvcm91bmRfZGlzdHJpYnV0aW9uJzogJ+Wck+W9ouWIhuW4g+efqemZoycsXG4gICAgJ21hdHJpeF9kaWFsb2cvc3BpcmFsX2Rpc3RyaWJ1dGlvbic6ICfonrrml4vliIbluIPnn6npmaMnLFxuICAgICdiYWRfbmV0d29ya19ub3RpY2UnOiAn55W25YmN57ay57Wh5LiN57Wm5Yqb77yM6KuL56iN5b6M5YaN6KmmJyxcbiAgICAnbm90X3N1cHBvcnRfeWV0JzogJ+eVtuWJjeeSsOWig+aaq+S4jeaUr+aMgemWi+WVk+S6uuiHieitmOWIpe+8jOaVrOiri+acn+W+hScsXG4gICAgLy8gb3B0aW9ucyBmb3IgZ2V0X2Vtb3Rpb25cbiAgICBoYXBweTogJ+mrmOiIiCcsXG4gICAgZmVhcjogJ+aBkOaHvCcsXG4gICAgYW5ncnk6ICfmhqTmgJInLFxuICAgIGRpc2d1c3Q6ICfljq3mg6EnLFxuICAgIHNhZDogJ+WCt+W/gycsXG4gICAgc3VycHJpc2U6ICfpqZroqJ0nLFxuICAgIG5ldXRyYWw6ICflubPpnZwnLFxuICAgIHBvdXR5OiAn5Zif5Zi0JyxcbiAgICBncmltYWNlOiAn6ay86IeJJyxcbiAgICAvLyBvcHRpb25zIGZvciBnZXRfZ2VuZGVyXG4gICAgbWFsZTogJ+eUt+eUnycsXG4gICAgZmVtYWxlOiAn5aWz55SfJyxcbiAgICAvLyBvcHRpb25zIGZvciBnZXRfZ2xhc3Nlc1xuICAgIHN1bjogJ+WiqOmPoScsXG4gICAgY29tbW9uOiAn5pmu6YCa55y86Y+hJyxcbiAgICBub25lOiAn54Sh55y86Y+hJyxcbiAgICAvLyBvcHRpb25zIGZvciBnZXRfZmFjZV9zaGFwZVxuICAgIHNxdWFyZTogJ+aWueiHiScsXG4gICAgdHJpYW5nbGU6ICfmoqjlvaLoh4knLFxuICAgIG92YWw6ICfptZ3om4voh4knLFxuICAgIGhlYXJ0OiAn5b+D5b2i6IeJJyxcbiAgICByb3VuZDogJ+Wck+iHiScsXG4gIH0sXG4gIHRoZWF0cmU6IHtcbiAgICBjbG9zZTogJ+mXnOmWiScsXG4gICAgcG9pbnRlcl9nZXRfY29sb3JfZXJyb3I6ICfnlbbliY3nhKHms5XnlKjlj5boibLlmajlvp7oiJ7lj7Dlj5boibLvvIzoq4vllZ/li5V3ZWJnbOaIluiRl+afpeeci+mhr+WNoeaYr+WQpuaUr+aMgXdlYmdsJyxcbiAgICBlbXB0eV9saXN0OiAn56m6JyxcbiAgICByZWNvcmRlcl9zdGFydDogJ+m7nuaTiuiqquipsScsXG4gICAgcmVjb3JkZXJfcmVjb3JkOiAn6bue5pOK6YyE6Z+zJyxcbiAgICByZWNvcmRlcl9yZWNvcmRpbmc6ICfpjITpn7PkuK0uLi4nLFxuICAgIHJlY29yZGVyX3JlY29nbml6aW5nOiAn6K2Y5Yil5LitLi4uJyxcbiAgICByZWNvcmRlcl9maW5pc2g6ICfpjITpn7Plt7LlrozmiJAnLFxuICAgIHJlY29yZGVyX3BsYXlpbmc6ICfpjITpn7Pmkq3mlL7kuK0uLi4nLFxuICAgIHJlY29yZGVyX3BsYXlfc3VjY2VlZDogJ+aSreaUvuaIkOWKn++8jOiri+mBuOaTh+S4iuWCs+aIluiAhemHjemMhO+8gScsXG4gICAgcmVjb3JkZXJfcGxheV9mYWlsOiAn5pKt5pS+5aSx5pWX77yM5bu66K2w6YeN6YyE44CC5ZCm5YmH5bCN5oeJ56mN5pyo54Sh5rOV5pKt5pS+6IGy6Z+z77yBJyxcbiAgICByZWNvcmRlcl9lcnJvcjogJ+WHuumMr+WVpiEg6KuL5YaN5qyh5ZiX6KmmficsXG4gICAgcmVjb3JkZXJfdGltZW91dDogJ+mMhOmfs+aZgumWk+acgOmVt+eCujMwc++8jOato+WcqOW5q+S9oOitmOWIpScsXG4gICAgcmVjb3JkZXJfdW5kZWZpbmVkOiAn54Sh5rOV5ZWf55So6YyE6Z+z5Yqf6IO977yM6L+U5Zue57WQ5p6cdW5kZWZpbmVkJyxcbiAgICByZWNvcmRlcl9yZXN0YXJ0OiAn6YeN6YyEJyxcbiAgICByZWNvcmRlcl9wbGF5OiAn5pKt5pS+JyxcbiAgICByZWNvcmRlcl9jbGVhcjogJ+a4heepuicsXG4gICAgcmVjb3JkZXJfY29uZmlybTogJ+eiuuiqjScsXG4gICAgcmVjb3JkZXJfbGFuZ3VhZ2VfZmFpbDogJ+W+ruS/oeerr+itmOWIpeiLseaWh+eahOWKn+iDveaaq+acqumWi+mAmu+8gScsXG4gICAgcmVjb3JkZXJfbm9fbmV0d29yazogJ+eEoee2sue1oemAo+e1kO+8jOiri+WFiOaqouafpee2sue1oScsXG4gICAgcmVjb3JkZXJfdGltZV9sZWZ0X3ByZTogJ+mChOWJqSAnLFxuICAgIHJlY29yZGVyX3RpbWVfbGVmdF9wb3N0OiAnIOenkicsXG5cbiAgICAvLyBjYW1lcmFcbiAgICBjYW1lcmFfc3VwcG9ydF9wbGF0Zm9ybTogJ+aLjeaUneaooeW8j+ebruWJjeWDheaUr+aMgeWuieWNk+aJi+apnycsXG4gICAgY2FtZXJhX25vX25ldHdvcms6ICfntrLntaHmlrfplovvvIznhKHms5Xkvb/nlKjoqbLlip/og70nLFxuXG4gICAgLy8gdmlkZW9cbiAgICBsb2FkX3ZpZGVvX2Vycm9yX25vdGljZTogJ+e2sue1oeeVsOW4uO+8jOimlumgu+S4n+WksScsXG5cbiAgICAvLyBub3RpY2VcbiAgICB3ZWJnbF9zdXBwb3J0ZWRfZXJyb3I6ICfmnKrplovllZ9XZWJHTO+8jOS9nOWTgeS4reS4gOS6m+epjeacqOeEoeazleato+W4uOmBi+ihjCcsXG5cbiAgICBzZWNvbmQ6ICfnp5InLFxuICB9LFxuICBkZWZhdWx0X2Z1bmN0aW9uczoge1xuICAgIGFzY2lpX25vdF9zdXBwb3J0X2Vycm9yOiAn54Sh5rOV5pSv5oyBYXNjaWnnorwnLFxuICAgIG5leHQ6ICfngrnlh7vnu6fnu60nLFxuICAgIG9yaWdpbmFsX3RleHQ6ICfljp/mlocnLFxuICAgIHRyYW5zbGF0aW9uOiAn6K2v5paHJyxcbiAgICB6aDogJ+S4reaWhycsXG4gICAgZW46ICfoi7HmlocnLFxuICAgIHd5dzogJ+aWh+iogOaWhycsXG4gICAgZnJhOiAn5rOV6KqeJyxcbiAgICBzcGE6ICfopb/nj63niZnoqp4nLFxuICAgIGpwOiAn5pel6KqeJyxcblxuICAgIC8vIGNhbWVyYVxuICAgIGNhbWVyYV9kZXZpY2VfZXJyb3I6ICfmlJ3lg4/poK3mrIrpmZDmnKrplovllZPvvIzmiJbnlbbliY3nkrDlooPmmqvkuI3mlK/mjIEnLFxuICAgIGNhbWVyYV9wZXJtaXNzaW9uX2Vycm9yOiAn54K66ZaL5ZWf5pSd5YOP6aCt5YG15ris5qyK6ZmQ77yM5b+r5Y676Kit572u5ZCnJyxcbiAgICBjYW1lcmFfcXJfbm90X3dlY2hhdF9lcnJvcjogJ+S6jOe2reeivOaooeW8j+eVtuWJjeWDheaUr+aMgeWcqOW+ruS/oeerr+mWi+WVnycsXG5cbiAgICAvLyB2aWRlb1xuICAgIGJsb2NrX25vX25ldHdvcms6ICfnhKHntrLntaHpgKPmjqXvvIzkvZzlk4HkuK3kuIDkupvnqY3mnKjnhKHms5XmraPluLjpgYvooYwnLFxuICAgIG1vYmlsZV92aWRlb19mYWlsdXJlOiAn6Kmy6KaW6aC754Sh5rOV5Zyo56e75YuV56uv6YGL6KGM77yM6KuL55So6Zu76IWm5omT6ZaLJyxcblxuICAgIC8vIHdvb2RcbiAgICB3b29kX3J1bm5pbmc6ICfmtbfpvpzlh73mlbjpgYvooYzkuK0uLi4nLFxuXG4gICAgLy8gZGF5IG5hbWVzXG4gICAgZGF5X25hbWVzXzA6ICfmmJ/mnJ/ml6UnLFxuICAgIGRheV9uYW1lc18xOiAn5pif5pyf5LiAJyxcbiAgICBkYXlfbmFtZXNfMjogJ+aYn+acn+S6jCcsXG4gICAgZGF5X25hbWVzXzM6ICfmmJ/mnJ/kuIknLFxuICAgIGRheV9uYW1lc180OiAn5pif5pyf5ZubJyxcbiAgICBkYXlfbmFtZXNfNTogJ+aYn+acn+S6lCcsXG4gICAgZGF5X25hbWVzXzY6ICfmmJ/mnJ/lha0nLFxuICB9LFxuICBraXR0ZW46IHtcbiAgICAnbGFuZ3VhZ2UnOiAndHcnLFxuICAgICdwdWJsaXNoJzogJ+eZvOW4gycsXG4gICAgJ2xvYWRfaW1hZ2VzJzogJ+ato+WcqOi8ieWFpeWclueJh+izh+a6kCcsXG4gICAgJ2xvYWRfc291bmRzJzogJ+ato+WcqOi8ieWFpeiBsumfs+izh+a6kCcsXG4gICAgJ3d4X3NoYXJlX21lc3NhZ2UnOiAn5oiR5Zyo57eo56iL6LKT55m854++6YCZ5YCL5L2c5ZOB5b6I5pyJ6Laj77yM5b+r5L6G55yL55yL77yBJyxcbiAgICAncGxheWVyX2Vycm9yX25vdGljZSc6ICfkvZzlk4HnqY3mnKjpgoTmnInpu57lsI/llY/poYws6KuL562J5b6F5L2c6ICF6Kq/6Kmm5ZOmficsXG4gICAgJ3BsYXllcl9sb2FkX2Vycm9yJzogJ+aJk+mWi+S9nOWTgeWkseaVlycsXG4gICAgJ3BsYXllcl9sb2FkX2Vycm9yX25vdGljZSc6ICfljbPlsIfmiZPplovkuIrkuIDlgIvniYjmnKwnLFxuICAgICdiY21fYXBwbGljYXRpb25fdmVyc2lvbl9oaWdoZXJfdGhhbl9jdXJyZW50JzogJ0JDTeeJiOacrOmBjumrmOaaq+aZgueEoeazlemBi+ihjCcsXG4gICAgJ3BsYXllcl9sb2FkX2RlZmF1bHRfbm90aWNlJzogJ+WNs+Wwh+aJk+mWi+m7mOiqjeS9nOWTgScsXG4gICAgJ2Rpc2Nvbm5lY3RfdGlwcyc6ICfmupDnorzkuJbnlYzmlrfntrLllabvvIHoq4vmqqLmn6XntrLntaHpgKPmjqUnLFxuICAgICdicm93c2VyX3RpcHMvaW5jb21wYXRpYmxlX2Jyb3dzZXInOiAn55W25YmN54CP6Ka95Zmo54Sh5rOV5q2j5bi46YGL6KGM6Kmy57ay6aCB77yM5L2/55SoQ2hyb21l6LC35q2M54CP6Ka95Zmo77yM5oiW5LiL6LyJ5rqQ56K85a6i5oi256uv77yM542y5b6X5a6M5pW05Yqf6IO96auU6amX44CCJyxcbiAgICAnYnJvd3Nlcl90aXBzL29sZF9icm93c2VyX3ZlcnNpb24nOiAn55W25YmN54CP6Ka95Zmo54mI5pys6LyD5L2O77yM5pu05pawQ2hyb21l6LC35q2M54CP6Ka95Zmo77yM5oiW5LiL6LyJ5rqQ56K85a6i5oi256uv77yM542y5b6X5a6M5pW05Yqf6IO96auU6amX44CCJyxcbiAgICAnYnJvd3Nlcl90aXBzL2luY29tcGF0aWJsZV9kZXZpY2UnOiAn5o6o6Jam5ZyoUEPnq6/pgYvooYzoqbLntrLpoIHvvIzmiJbkuIvovInnt6jnqIvospNOZW1v77yM6auU6amX5omL5qmf57eo56iL55qE5qiC6Laj44CCJyxcblxuICAgICdvcGVuaW5nX3RoZV9jYW1lcmEnOiAn5q2j5Zyo5omT6ZaL54Wn55u45qmfJyxcbiAgICAnbm9fcmVzdWx0c193ZXJlX2lkZW50aWZpZWQnOiAn5pyq6K2Y5Yil5Yiw57WQ5p6cJyxcbiAgICAnc2Nhbl9yZXN1bHRfdGl0bGUnOiAn5o6D5o+P5Yiw5Lul5LiL5YWn5a65JyxcbiAgICAnY2xpY2tfY29udGludWUnOiAn6bue5pOK6L+U5Zue6YGK5oiyJyxcbiAgICAnbm90X3Byb3ZpZGVkX2J5X2NvZGVtYW8nOiAn5o6D5o+P5omA5b6X5YWn5a655Lim6Z2e57eo56iL6LKT5o+Q5L6bJyxcbiAgICAnc2Nhbl9xcmNvZGUnOiAn6K2Y5Yil5LqM57at56K8JyxcbiAgICAncXJjb2RlX2NhbWVyYV9sb2FkaW5nJzogJ+WcluWDj+WKoOi8ieS4rScsXG4gICAgJ2NhbWVyYV9zbG93X25ldHdvcmsnOiAn55W25YmN57ay57Wh5LiN5L2z77yM6KuL5qqi5p+l57ay57Wh6YCj5o6lJyxcbiAgICAncGxlYXNlX3VzZV93aXRoX2NhdXRpb24nOiAn6KuL6Ky55oWO5L2/55SoJyxcbiAgICAndmlzaXRfdGhlX3dlYnNpdGUnOiAn6Kiq5ZWP57ay56uZJyxcblxuICAgICdwdWJsaXNoL2ZpbmlzaCc6ICflrozmiJAnLFxuXG4gICAgJ21sX2RpYWdyYW0vdHJhaW5pbmdfdGltZSc6ICfoqJPnt7TmrKHmlbgnLFxuICAgICdtbF9kaWFncmFtL2lucHV0X2xheWVyJzogJ+i8uOWFpeWxpCcsXG4gICAgJ21sX2RpYWdyYW0vb3V0cHV0X2xheWVyJzogJ+i8uOWHuuWxpCcsXG4gICAgJ21sX2RpYWdyYW0vbGF5ZXInOiAn56We57aT57ay57Wh6Zqx5ZCr5bGkJyxcbiAgICAnbWxfZGlhZ3JhbS91bnN1cHBvcnRfZ3JhcGgnOiAn5b2T5YmN5qih5Z6L5LiN5pSv5oyB5Zu+5YOP5pi+56S6JyxcbiAgICAnYXV0b19wbGF5ZXJfZGVmYXVsdF9tb2RlbF9uYW1lJzogJ21vZGVsIG9uZScsXG4gICAgJ2F1dG9fcGxheWVyX25vX2NvcnJlc3BvbmRpbmdfZGF0YSc6ICctLScsXG4gICAgJ2F1dG9fcGxheWVyX3J1bm5pbmcnOiAn6YGL6KGM5LitJyxcbiAgICAnYXV0b19wbGF5ZXJfbnRoX2dlbmVyYXRpb24nOiAnbnRoX2dlbmVyYXRpb25fdHcnLFxuICAgICdhdXRvX3BsYXllcl9oaWdoZXN0X3Njb3JlJzogJ+acgOmrmOWIhuaVuCcsXG4gICAgJ2F1dG9fcGxheWVyX2l0ZXJhdGlvbl9udW0nOiAn5Y+g5Luj5qyh5pW4JyxcbiAgICAnYXV0b19wbGF5ZXJfc2NvcmVfcmVjb3JkJzogJ+WIhuaVuOiomOmMhCcsXG4gICAgJ2F1dG9fcGxheWVyX2FjdGlvbl9kYXRhX3JlY29yZCc6ICfmlbjmk5roqJjpjIQnLFxuICAgICdhdXRvX3BsYXllcl9xdWlja19tb2RlJzogJ+W/q+mAn+aooeW8jycsXG4gICAgJ2F1dG9fcGxheWVyX25vcm1hbF9tb2RlJzogJ+ato+W4uOaooeW8jycsXG4gICAgJ2F1dG9fcGxheWVyX3NhdmVfYnV0dG9uX2NvbnRlbnQnOiAn5YSq5YyW5qih5Z6L5Lim5YGc5q2i56iL5bqPJyxcbiAgICAnYWN0aW9uJzogJ+ihjOeCuicsXG4gICAgJ25vX2FjdGlvbic6ICfkuI3mk43kvZwnLFxuICAgICdiYWNrUHJvcGFnYXRpb24nOiAn5b6M5ZCR5YKz5pKt566X5rOVJyxcbiAgICAnZXZvbHV0aW9uJzogJ+mBuuWCs+eul+azlScsXG4gICAgJ3Vua25vd25fYWxnb3JpdGhtJzogJ+acquefpeeul+azlScsXG4gICAgJ3Vua25vd25fdGl0bGUnOiAn5pyq55+l5qiZ6aGMJyxcbiAgICAndW5rbm93bl9tb2RlJzogJ+acquefpeaooeW8jycsXG4gICAgJ2Jsb2NrX2xhYic6ICfnqY3mnKjlr6bpqZflrqQnLFxuICAgICdibG9ja19vcHRpb24nOiAn56mN5pyo5Yqf6IO96YG45pOHJyxcbiAgICAnYmxvY2tfcmVhZF9tb3JlJzogJ+afpeeci+ips+e0sOaUu+eVpScsXG4gICAgJ2Jsb2NrX2NvbmZpcm0nOiAn56K66KqN5re75YqgJyxcbiAgICAnYWlfY2xhc3NpZmljYXRpb25fbmFtZSc6ICfliIbpoZ5BSScsXG4gICAgJ2FpX2NsYXNzaWZpY2F0aW9uX2Rlc2NyaXB0aW9uJzogJ+OAkEFJ44CR5YiG6aGeQUnog73lpKDoqJPnt7TliIbpoZ7mqKHlnovoiIfpoJDmuKzliIbpoZ7ntZDmnpzjgILpgJrpgY7oqbLlip/og73vvIznlKjmiLblj6/ku6Xoo73kvZzlpoLphZLpoZ7orZjliKXjgIHnlr7nl4XliKTmlrfnrYnln7rmlrzliIbpoZ5BSeeahOaHieeUqOeoi+W6j+OAgicsXG4gICAgJ2FpX2dhbWVfbmFtZSc6ICdHYW1lQUknLFxuICAgICdhaV9nYW1lX2Rlc2NyaXB0aW9uJzogJ+OAkEFJ44CRR2FtZUFJ5Y+v5Lul6KiT57e056We57aT57ay57Wh5qih5Z6L77yM6KeS6Imy5Yqg6LyJ5qih5Z6L5Y+v5Lul5YGa5YiwQUnoh6rli5XpgYrmiLLjgILnlKjmiLbpgJrpgY5HYW1lQUnlip/og73vvIzlj6/ku6Xoo73kvZxBSeeOqUZsYXBweUJpcmTjgIFBSeeOqemjm+apn+Wkp+aIsOetiemBiuaIsuWPiuaHieeUqOOAgicsXG5cbiAgICAnY2xvdWRfdmFyaWFibGUvd2VjaGF0X2xvZ2luJzogJ+W+ruS/oeeZu+mMhCcsXG4gICAgJ2Nsb3VkX3ZhcmlhYmxlL3VzZXJfbG9naW4nOiAn6LOs6Jmf55m76YyEJyxcbiAgICAnY2xvdWRfdmFyaWFibGUvd2VjaGF0X2xvZ291dCc6ICfpgIDlh7onLFxuICAgICdjbG91ZF92YXJpYWJsZS9sb2dnZWRfaW4nOiAn5L2c5ZOB5Lit5YyF5ZCr4oCc6Zuy5pW45pOa4oCd55qE55u46Zec5Yqf6IO9JyxcbiAgICAnY2xvdWRfdmFyaWFibGUvbm90X2xvZ2dlZF9pbic6ICfnlKjmiLbmnKrnmbvpjITvvIznhKHms5Xkvb/nlKjigJzpm7Lmlbjmk5rigJ3nm7jpl5zlip/og70nLFxuICAgICdjbG91ZF92YXJpYWJsZS9jb25uZWN0X2Vycm9yJzogJ+mbsuaVuOaTmuebuOmXnOWKn+iDveWkseaViO+8jOiri+aqouafpee2sue1oemAo+aOpScsXG4gICAgJ2Nsb3VkX3ZhcmlhYmxlL3JhbmtpbmcvbG9hZGluZy1lcnJvci0xJzogJ+e2sue1oemAo+aOpeeVsOW4uC4uLicsXG4gICAgJ2Nsb3VkX3ZhcmlhYmxlL3JhbmtpbmcvbG9hZGluZy1lcnJvci0yJzogJ+aOkuihjOamnOeNsuWPluWkseaVlycsXG4gICAgJ2Nsb3VkX3ZhcmlhYmxlL3JhbmtpbmcvbG9hZGluZy1lcnJvci1wcmV2aWV3JzogJ+mgkOimveaooeW8j+S4i++8jOmbsuaVuOaTmuacg+S7peacrOWcsOW9ouW8j+mBi+ihjCcsXG4gICAgJ2Nsb3VkX3ZhcmlhYmxlL3JhbmtpbmcnOiAn5o6S6KGM5qacJyxcbiAgICAnY2xvdWRfdmFyaWFibGUvbm90X2xvZ2dlZF9pbl91c2VyJzogJ+acqueZu+mMhOeUqOaIticsXG4gICAgJ2Nsb3VkX3ZhcmlhYmxlL25vX3VwZGF0ZSc6ICfoqr/oqabmqKHlvI/kuIvnhKHms5Xkv67mlLnpm7Lororph4/nmoTlgLwnLFxuICAgICdjbG91ZF92YXJpYWJsZS9hbm9ueW1vdXNfdXNlcic6ICfljL/lkI3nlKjmiLYnLFxuXG4gICAgJ3NpZ25faW5fZGlhbG9nL3Bhc3N3b3JkX2Vycm9yJzogJ+WvhueivOagvOW8j+mMr+iqpO+8jOiHs+WwkeWMheWQqzblgIvlrZfnrKbmiJbmlbjlrZcnLFxuICAgICdzaWduX2luX2RpYWxvZy9wYXNzd29yZF9lbXB0eSc6ICflr4bnorzkuI3og73ngrrnqbonLFxuICAgICdzaWduX2luX2RpYWxvZy9tb2JpbGVfZW1wdHknOiAn5omL5qmf6Jmf5LiN6IO954K656m6JyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZW1haWxfZW1wdHknOiAn6YO1566x5LiN6IO954K656m6JyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZW1haWxfZXJyb3InOiAn6YO1566x5qC85byP5LiN5q2j56K6JyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZW1haWxfb2Z0ZW4nOiAn6YO15Lu255m86YCB6YGO5pa86aC757mBJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZXJyb3Ivb3RoZXIvYWNjX29yX3B3ZCc6ICfnlKjmiLblkI3miJblr4bnorzkuI3mraPnoronLFxuICAgICdzaWduX2luX2RpYWxvZy9jb2RlX3NlbmRfc3VjY2Vzcyc6ICfpqZforYnnorzlt7LnmbzpgIHliLDoqbLmiYvmqZ/omZ8nLFxuICAgICdzaWduX2luX2RpYWxvZy9lbXB0eV9hY2NvdW50JzogJ+eUqOaItuWQjeS4jeiDveeCuuepuicsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2VtcHR5X3Bhc3N3b3JkJzogJ+WvhueivOS4jeiDveeCuuepuicsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2VtcHR5X2NvZGUnOiAn6amX6K2J56K85LiN6IO954K656m6JyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcmVnaXN0ZXJfZXJyb3InOiAn6Ki75YaK5aSx5pWXJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZXJyb3Ivb3RoZXIvbmV0d29yayc6ICfntrLntaHpgKPmjqXlh7rpjK/kuoYs6KuL56iN5b6M5YaN6KmmJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZXhpc3RfZXJyb3InOiAn6Ki75YaK5aSx5pWX77yM5biz6Jmf5bey57aT5a2Y5ZyoJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvY29kZV9lcnJvcic6ICfnjbLlj5bpqZforYnnorzlpLHmlZfvvIzoq4vph43mlrDlmJfoqaYnLFxuICAgICdzaWduX2luX2RpYWxvZy9idG5fcmVzZW5kJzogJ+mHjeaWsOeZvOmAgScsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2J0bl9jb2RlJzogJ+eNsuWPlumpl+itieeivCcsXG4gICAgJ3NpZ25faW5fZGlhbG9nL25vdF9leGlzdF9lcnJvcic6ICfluLPomZ/kuI3lrZjlnKjvvIzoq4vovLjlhaXlt7LoqLvlhornmoTpg7XnrrEnLFxuICAgICdzaWduX2luX2RpYWxvZy9yZXNldF9lbWFpbF9zZW50JzogJ+W3suWPkemAgemHjee9ruWvhueggemCruS7tu+8jOivt+WPiuaXtuafpeaUticsXG4gICAgJ3NpZ25faW5fZGlhbG9nL3Jlc2V0X2xpbWl0X2Vycm9yJzogJ+S7iuWkqemHjee9ruWvhueivOeZvOmAgemDteS7tuW3sumBlOS4iumZkCcsXG4gICAgJ3NpZ25faW5fZGlhbG9nL3Vua25vd25fZXJyb3InOiAn5pyq55+l6Yyv6KqkJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcmVnaXN0ZXInOiAn6Ki75YaKJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvbG9naW4nOiAn55m75YWlJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvdGhpcmRfcGFydHknOiAn56ys5LiJ5pa555m75YWlJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvdG9fcmVnaXN0ZXInOiAn5bey5pyJ6LOs6Jmf77yf56uL5Y2z55m75YWlJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcmVnaXN0ZXJfd2l0aF9waG9uZSc6ICfkvb/nlKjmiYvmqZ/omZ/oqLvlhoonLFxuICAgICdzaWduX2luX2RpYWxvZy9yZWdpc3Rlcl93aXRoX2VtYWlsJzogJ+S9v+eUqOmDteeuseiou+WGiicsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2NvZGUnOiAn542y5Y+W6amX6K2J56K8JyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcmVzZW5kJzogJ+mHjeaWsOeZvOmAgScsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2xvZ2luX25vdyc6ICfnq4vljbPnmbvlhaUnLFxuICAgICdzaWduX2luX2RpYWxvZy9yZWdpc3Rlcl9ub3cnOiAn56uL5Y2z6Ki75YaKJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvYm9udXMnOiAn5omL5qmf6Ki75YaK6LSI6YCBNTAw6YeR5bmj5ZKM6buD6YeR5rqQ56K86JuLJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcGxhY2Vob2xkZXIvdXNlcm5hbWUnOiAn5omL5qmfL+mDteeusS/nlKjmiLflkI0nLFxuICAgICdzaWduX2luX2RpYWxvZy9wbGFjZWhvbGRlci9wYXNzd29yZCc6ICflr4bnorwnLFxuICAgICdzaWduX2luX2RpYWxvZy9wbGFjZWhvbGRlci9wYXNzd29yZF9uX3RpcCc6ICflr4bnorzvvIg2LTIw5L2N77yJJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcGxhY2Vob2xkZXIvcGFzc3dvcmRfY29uZmlybSc6ICflho3mrKHovLjlhaXlr4bnorwnLFxuICAgICdzaWduX2luX2RpYWxvZy9wbGFjZWhvbGRlci9jb2RlJzogJ+mpl+itieeivCcsXG4gICAgJ3NpZ25faW5fZGlhbG9nL3BsYWNlaG9sZGVyL3Bob25lJzogJ+aJi+apn+iZnycsXG4gICAgJ3NpZ25faW5fZGlhbG9nL3BsYWNlaG9sZGVyL2VtYWlsJzogJ+mDteeusScsXG4gICAgJ3NpZ25faW5fZGlhbG9nL3JlZ2lzdGVyX3N1Y2Nlc3MvcGhvbmVfdGl0bGUnOiAn6Ki75YaK5oiQ5Yqf77yBJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcmVnaXN0ZXJfc3VjY2Vzcy9waG9uZV9zdWNjZXNzX2NvbnRlbnRfMSc6ICfmga3llpzkvaDvvIHkvaDnmoTos6zomZ8nLFxuICAgICdzaWduX2luX2RpYWxvZy9yZWdpc3Rlcl9zdWNjZXNzL3Bob25lX3N1Y2Nlc3NfY29udGVudF8yJzogJ+W3sue2k+WujOaIkOiou+WGiicsXG4gICAgJ3NpZ25faW5fZGlhbG9nL3JlZ2lzdGVyX3N1Y2Nlc3MvcGhvbmVfYnRuX2NvbnRlbnQnOiAn56uL5Y2z55m75YWlJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcmVnaXN0ZXJfc3VjY2Vzcy9lbWFpbF90aXRsZSc6ICfpqZforYnpg7Xku7blt7Lnmbzlh7onLFxuICAgICdzaWduX2luX2RpYWxvZy9yZWdpc3Rlcl9zdWNjZXNzL2VtYWlsX3N1Y2Nlc3NfY29udGVudF8xJzogJ+iri+WcqDI05bCP5pmC5YWn55m75YWl6YO1566xJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcmVnaXN0ZXJfc3VjY2Vzcy9lbWFpbF9zdWNjZXNzX2NvbnRlbnRfMic6ICfkuKbmjInpg7Xku7bmj5DnpLrpgLLooYzmk43kvZzlrozmiJDpqZforYknLFxuICAgICdzaWduX2luX2RpYWxvZy9yZWdpc3Rlcl9zdWNjZXNzL2VtYWlsX2J0bl9jb250ZW50JzogJ+aIkeefpemBk+S6hicsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2ZvcmdldF9wYXNzd29yZC9lbWFpbCc6ICfoq4vovLjlhaXpg7XnrrEnLFxuICAgICdzaWduX2luX2RpYWxvZy9mb3JnZXRfcGFzc3dvcmQvZW50cnknOiAn5b+Y6KiY5a+G56K877yfJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvc2lnbl9pbl93aXRoX3Bhc3N3b3JkJzogJ+WvhueivOeZu+mMhCcsXG4gICAgJ3NpZ25faW5fZGlhbG9nL3NpZ25faW5fd2l0aF9zbXMnOiAn55+t5L+h55m76YyEJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZmluZF9wYXNzd29yZCc6ICfmib7lm57lr4bnorwnLFxuICAgICdzaWduX2luX2RpYWxvZy9zaWduX3VwX2FjY291bnQnOiAn6LOs6Jmf6Ki75YaKJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvbW9iaWxlX3Bob25lJzogJ+aJi+apnycsXG4gICAgJ3NpZ25faW5fZGlhbG9nL25ld191c2VyX3NpZ25fdXAnOiAn5paw55So5oi36Ki75YaKJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvcmVzZXRfcGFzc3dvcmQnOiAn6YeN572u5a+G56K8JyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvYmFja190b19sb2dpbic6ICfov5Tlm57nmbvpjIQnLFxuICAgICdzaWduX2luX2RpYWxvZy9uZXh0JzogJ+S4i+S4gOatpScsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2ZvcmdldF9wYXNzd29yZC92ZXJpZnknOiAn6amX6K2J6Lqr5Lu95b6M77yM5Y+v6YeN572u5a+G56K8JyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZm9yZ2V0X3Bhc3N3b3JkL3NldF9wYXNzd29yZCc6ICfoq4voqK3nva7kvaDnmoTmlrDlr4bnorwnLFxuICAgICdzaWduX2luX2RpYWxvZy9mb3JnZXRfcGFzc3dvcmQvc3VjY2Vzcyc6ICflr4bnorzph43nva7miJDlip8nLFxuICAgICdzaWduX2luX2RpYWxvZy9nb190b19sb2dpbic6ICfljrvnmbvpjIQnLFxuICAgICdzaWduX2luX2RpYWxvZy9sb2dpbl9zdWNjZXNzJzogJ+eZu+mMhOaIkOWKnycsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2Vycm9yL3Ntc19jb2RlL2ZhaWwnOiAn6amX6K2J56K86Yyv6Kqk77yM6KuL6YeN5paw6Ly45YWlJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZXJyb3IvcGhvbmUvZm9ybWF0JzogJ+aJi+apn+agvOW8j+S4jeato+eiuicsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2Vycm9yL3Bob25lL3VucmVnaXN0ZXJkJzogJ+aJi+apn+iZn+acquiou+WGiu+8jCcsXG4gICAgJ3NpZ25faW5fZGlhbG9nL2Vycm9yL3Bob25lL3JlZ2lzdGVyZWQnOiAn5omL5qmf6Jmf5bey6Ki75YaK77yMJyxcbiAgICAnc2lnbl9pbl9kaWFsb2cvZXJyb3IvcGFzc3dvcmQvZm9ybWF0JzogJ+iri+i8uOWFpTYtMjDkvY3lr4bnorwnLFxuICAgICdzaWduX2luX2RpYWxvZy9lcnJvci9wYXNzd29yZF9jb25maXJtL25vdF9zYW1lJzogJ+WFqeasoei8uOWFpeeahOWvhueivOS4jeS4gOiHtO+8jOiri+mHjeaWsOi8uOWFpScsXG4gICAgJ3NpZ25faW5fZGlhbG9nL3JlZ2lzdGVyX3N1Y2Nlc3NfdGhlbl9sb2dpbic6ICfoqLvlhormiJDlip/vvIzlt7LngrrkvaDnmbvpjITos6zomZ8nLFxuXG4gICAgJ3RoZWF0cmUvYXNjaWlfbm90X3N1cHBvcnRfZXJyb3InOiAn6Kmy6Kit5YKZ5pqr5pmC5LiN5pSv5oyB56ym6Jmf56K854m55pWI5Yqf6IO9JyxcbiAgICAndGhlYXRyZS9yZWNvcmRlcl9lcnJvcic6ICflh7rpjK/llaYhIOiri+WGjeasoeWYl+ippn4nLFxuICAgICd0aGVhdHJlL3JlY29yZGVyX25vX25ldHdvcmsnOiAn54Sh57ay57Wh6YCj57WQ77yM6KuL5YWI5qqi5p+l57ay57WhJyxcbiAgICAnaW9zX3dlYm1fZXJyb3InOiAn6Kmy6Kit5YKZ5pqr5pmC5LiN5pSv5oyB5pKt5pS+6YyE6Z+z6Z+z6aC7JyxcblxuICAgICdibG9ja19ub19uZXR3b3JrJzogJ+eEoee2sue1oemAo+aOpe+8jOS9nOWTgeS4reS4gOS6m+epjeacqOeEoeazleato+W4uOmBi+ihjCcsXG5cbiAgICAnaGFyZHdhcmUvbG9hZF90aXBzJzogJ+S9nOWTgeS4reWMheWQq+eahOKAnOehrOS7tuKAneepjeacqOaaq+aZgueEoeazlemBi+ihjCcsXG4gICAgJ2hhcmR3YXJlL2Jsb2Nrc19ydW5uaW5nX25vdGljZSc6ICfnoazku7bnqY3mnKjmmqvmmYLnhKHms5XpgYvooYwnLFxuXG4gICAgJ2ZhY2VfZGV0ZWN0L3RpdGxlJzogJ+S6uuiHieitmOWIpScsXG4gICAgJ2ZhY2VfZGV0ZWN0L2NhbWVyYV9wZXJtaXNzaW9uX2Vycm9yJzogJ+acqumWi+WVn+aUneWDj+mgreaLjeaUneasiumZkO+8jOW/q+WOu+ioree9ruWQpycsXG4gICAgJ2ZhY2VfZGV0ZWN0L2NhbWVyYV9kZXZpY2VfZXJyb3InOiAn6Kmy6Kit5YKZ5pqr5pmC5LiN5pSv5oyB5pSd5YOP6aCt5ouN5pSd5Yqf6IO9JyxcbiAgICAnZmFjZV9kZXRlY3QvdXBsb2FkaW5nJzogJ+ato+WcqOaqoua4rOS4re+8jOiri+iAkOW/g+etieW+he+9nicsXG4gICAgJ2JhZF9uZXR3b3JrX25vdGljZSc6ICfnlbbliY3ntrLntaHkuI3ntablipvvvIzoq4vnqI3lvozlho3oqaYnLFxuICAgICdmYWNlX2RldGVjdC91cGxvYWRfZXJyb3InOiAn57ay6Lev5LiN57Wm5Yqb77yM5LiK5YKz5aSx5pWXJyxcbiAgICAnZmFjZV9kZXRlY3QvdXBsb2FkX2ltZyc6ICfkuIrlgrPkurroh4knLFxuICAgICdmYWNlX2RldGVjdC9jYXB0dXJlJzogJ+aLjeeFpycsXG4gICAgJ2ZhY2VfZGV0ZWN0L2NhbmNlbCc6ICflj5bmtognLFxuICAgICdmYWNlX2RldGVjdC9jb25maXJtJzogJ+eiuuWumicsXG4gICAgJ2ZhY2VfZGV0ZWN0L2xvYWRpbmcnOiAn5ZyW5YOP5Yqg6LyJ5LitJyxcbiAgICAnZmFjZV9kZXRlY3QvY2FtZXJhX3VuYXZhaWxhYmxlJzogJ+eEoeazleaJk+mWi+aUneWDj+mgrScsXG4gICAgJ2ZhY2VfZGV0ZWN0L3VwbG9hZF9pbWdfdGlwcyc6ICfnm7TmjqXkuIrlgrPkurroh4nlnJbniYflkKfvvZ4nLFxuICAgICdmYWNlX2RldGVjdC9ub19mYWNlX2RldGVjdF9wZXJtaXNzaW9uJzogJ+eNsuWPluS6uuiHieitmOWIpeasiumZkOWkseaVl++8jOeEoeazleitmOWIpeS6uuiHiScsXG4gICAgJ2ZhY2VfZGV0ZWN0L2ZpbGVfbGltaXQnOiAn5Y+q6IO95LiK5YKzIGpwZ+OAgWpwZWfjgIFwbmfjgIFibXAg5qC85byP55qE5paH5Lu2JyxcblxuICAgICd3b29kL3dvb2RfcnVubmluZ19ub3RpZmljYXRpb24nOiAn5rW36b6c56mN5pyo5pqr5pmC54Sh5rOV6YGL6KGMJyxcblxuICAgICdyZXF1ZXN0X2Vycm9yL2JhZF9yZXF1ZXN0JzogJ+eoi+W6j+WKoOi8ieWHuumMr++8jOiri+eojeW+jOWGjeippicsXG4gICAgJ3JlcXVlc3RfZXJyb3Ivc2VydmVyX2Vycm9yJzogJ+acjeWLmeWZqOeEoemfv+aHie+8jOiri+eojeW+jOWGjeippicsXG4gICAgJ3JlcXVlc3RfZXJyb3IvdGltZW91dCc6ICfntrLntaHpgKPmjqXotoXmmYLvvIzoq4vnqI3lvozlho3oqaYnLFxuICAgICdyZXF1ZXN0X2Vycm9yL3NlcnZlcl9jb25uZWN0aW9uX2Vycm9yJzogJ+acjeWLmeWZqOmAo+aOpemMr+iqpO+8jOiri+eojeW+jOWGjeippicsXG4gICAgJ3JlcXVlc3RfZXJyb3IvdW5rbm93bl9lcnJvcic6ICfmnKrnn6XpjK/oqqTvvIzoq4vliLfmlrDlvozph43oqaYnLFxuXG4gICAgJ3Jlc291cmNlX2Vycm9yJzogJ+WtmOWcqOWPl+aQjeeahOWclueJh+aIluiBsumfs+izh+a6kO+8jOiri+abv+aPm+ato+eiuuizh+a6kCcsXG5cbiAgICAncmVxdWVzdF9lcnJvci90cmFuc2xhdGVfdGltZXNfcmVhY2hfbGltaXQnOiAn6Kit5YKZ5LuK5pel5bey6LaF6YGO6Kq/55So5LiK6ZmQ77yM54Sh5rOV5L2/55So57+76K2v5Yqf6IO9JyxcbiAgICAncmVxdWVzdF9lcnJvci9iYWNrZW5kX2Nvbm5lY3RfYmFpZHVfdHJhbnNsYXRlX2ZhaWwnOiAn57ay57Wh55Ww5bi477yM57+76K2v56mN5pyo54Sh5rOV6YGL6KGM77yM6KuL6YeN6KmmJyxcbiAgICAncmVxdWVzdF9lcnJvci93b3JrX3RyYW5zbGF0ZV90aW1lc19saW1pdCc6ICfmlbjmk5rnlbDluLjvvIznrYnlvoXkvZzogIXmm7TmraMnLFxuXG4gICAgJ25vdGljZS9ub3Rfc2lnbmVkX2luJzogJ+acrOS9nOWTgeWQq+acieS6keaVuOaTmuebuOmXnOWKn+iDve+8jOeZu+mMhOW+jOaJjeiDveato+W4uOmBi+ihjCcsXG4gICAgJ3RpcHMvbm90X2xvZ2dlZF9pbic6ICfnlKjmiLbmnKrnmbvpjITvvIznhKHms5Xkvb/nlKjigJzpm7Lmlbjmk5rlj4roqo3nn6VBSeKAneebuOmXnOWKn+iDvScsXG5cbiAgICAnZGV2aWNlX29yaWVudGF0aW9uX25vdF9zdXBwb3J0JzogJ+eVtuWJjeeSsOWig+S4jeaUr+aMgeWCvuaWnOWBtea4rCcsXG5cbiAgICAnY2F0dWkyL3NpZ25faW5fdGlwX3RleHQnOiAn5L2g6YKE5pyq55m76YyE77yM55m76YyE5b6M6auU6amX5pu05qOS5ZOm772eJyxcbiAgICAnY2F0dWkyL3NpZ25faW5fYnRuX3RleHQnOiAn56uL5Y2z55m76YyEJyxcblxuICAgIC8vIHBoeXNpY3MyXG4gICAgJ2VsYXN0aWNfYm9keV9zdXBwb3J0ZWRfd2FybmluZyc6ICfnlbbliY3nkrDlooPlsI3mn5Tou5/mnZDos6rnmoTmlK/mjIHovIPlvLEnLFxuICB9LFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBckJBO0FBdUJBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWxDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBbk1BO0FBbElBOzs7Ozs7OztBQUFBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
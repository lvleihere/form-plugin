(function(root, factory, plug) {
    factory(jQuery, plug);
})(this, function(jQuery, plug) {
    var _DELFAULT_ = {
            /*配置*/
            initEvent: "input",
            plugName: "dr"
        }
        /*配置功能*/
    var _RELUS_ = {
        "regexp": function(data) {
            return new RegExp(data).test(this.val());
        },
        "required": function(data) {
            return this.val();
        },
        "min-length": function(data) {
            return this.val().length >= data;
        },
        "max-length": function(data) {
            return this.val().length <= data;
        }

    }


    $.fn[plug] = function(options) {
            if (!this.is("form")) {
                return this;
                console.log('not form');
            }

            $.extend(this, _DELFAULT_, options);
            console.log(this);
            this.$file = this.find("input");
            this.$file.on(this.initEvent, function() {
                var _this = $(this);
                //_this.siblings("p").remove();
                console.log(_this.val());
                $.each(_RELUS_, function(key, fn) {
                    var $fileName = _this.data("dataName", _DELFAULT_.plugName + '-' + key);
                    var $message = _this.data("dataName");
                    console.log($fileName);
                    console.log($message);
                    if ($fileName) {
                        var result = fn.call(_this, $fileName);
                        console.log(result);
                        if (!result) { //提示信息：true 校验成功   false  校验失败
                            _this.after("<p style='color:red;'>" + $message + "</p>");
                        }
                    }
                })
            })

        }
        // $.fn[plug].dataResult=function(){

    // 	}
}, "dataResult");

angular.module('fiskkitTest').factory('urlContent',function() {

	/* ajax function to call php function and get data*/
		this.url = "";
		this.status = "false";
		this.result = function(){
			if( this.url ){
				$.ajax({
					url: "getContent.php",
					data:'url='+this.url,
					type: "POST",
					success: function(responseData){
						if( responseData){
							var iframe = document.getElementById('ifid');
							iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
							iframe.document.open();
							iframe.document.write(responseData);
							iframe.document.close();
						}
					}
				});
			}
		};
});
'use strict';

define('admin/plugins/onesignal', [
	'settings', 'alerts',
], function (settings, alerts) {
	var ACP = {};

	ACP.init = function () {
		settings.load('onesignal', $('.onesignal-settings'));
		$('#save').on('click', saveSettings);
	};

	function saveSettings() {
		settings.save('onesignal', $('.onesignal-settings'), function () {
			alerts.alert({
				type: 'success',
				alert_id: 'onesignal-saved',
				title: 'Reload Required',
				message: 'Please reload your NodeBB to complete configuration of the OneSignal plugin',
				clickfn: function () {
					socket.emit('admin.reload');
				},
			});
		});
	}

	return ACP;
});

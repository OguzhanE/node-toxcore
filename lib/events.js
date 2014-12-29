var buffertools = require('buffertools');
buffertools.extend();

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_friend_request(3).
 * @class
 * @param {Buffer} publicKey Public key of requester
 * @param {Buffer} data Data required to accept the request
 */
var FriendRequestEvent = function(publicKey, data) {
  this._publicKey = publicKey;
  this._data = data;
};

/**
 * Get the public key.
 * @return {Buffer} Public key
 */
FriendRequestEvent.prototype.publicKey = function() {
  return this._publicKey;
};

/**
 * Get the public key as a hex String.
 * @return {String} Public key as a hex String
 */
FriendRequestEvent.prototype.publicKeyHex = function() {
  return this._publicKey.toHex().toString();
};

/**
 * Get the data.
 * @return {Buffer} Data
 */
FriendRequestEvent.prototype.data = function() {
  return this._data;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_friend_message(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {String} message Message
 */
var FriendMessageEvent = function(friendnum, message) {
  this._friendnum = friendnum;
  this._message = message;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
FriendMessageEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the message.
 * @return {String} Message
 */
FriendMessageEvent.prototype.message = function() {
  return this._message;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_friend_action(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {String} action Action
 */
var FriendActionEvent = function(friendnum, action) {
  this._friendnum = friendnum;
  this._action = action;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
FriendActionEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the action.
 * @return {String} Action
 */
FriendActionEvent.prototype.action = function() {
  return this._action;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_name_change(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {String} name New name
 */
var NameChangeEvent = function(friendnum, name) {
  this._friendnum = friendnum;
  this._name = name;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
NameChangeEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the new name.
 * @return {String} New name
 */
NameChangeEvent.prototype.name = function() {
  return this._name;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_status_message(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {String} message Status message
 */
var StatusMessageEvent = function(friendnum, message) {
  this._friendnum = friendnum;
  this._message = message;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
StatusMessageEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the status message.
 * @return {String} Status message
 */
StatusMessageEvent.prototype.statusMessage = function() {
  return this._message;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_user_status(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {Number} status User status
 */
var UserStatusEvent = function(friendnum, status) {
  this._friendnum = friendnum;
  this._status = status;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
UserStatusEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the user status.
 * @return {Number} User status
 */
UserStatusEvent.prototype.status = function() {
  return this._status;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_typing_change(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {Boolean} typing Whether or not the friend is typing
 */
var TypingChangeEvent = function(friendnum, typing) {
  this._friendnum = friendnum;
  this._typing = (typing === true || typing === 1);
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
TypingChangeEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Whether or not the friend is typing.
 * @return {Boolean} true if typing, false if not typing
 */
TypingChangeEvent.prototype.typing = function() {
  return this._typing;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_read_receipt(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {Number} receipt Receipt
 */
var ReadReceiptEvent = function(friendnum, receipt) {
  this._friendnum = friendnum;
  this._receipt = receipt;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
ReadReceiptEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the receipt.
 * @return {Number} Receipt
 */
ReadReceiptEvent.prototype.receipt = function() {
  return this._receipt;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_connection_status(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {Number} status Connection status (0 = went offline after previously online, 1 = went online)
 */
var ConnectionStatusEvent = function(friendnum, status) {
  this._friendnum = friendnum;
  this._status = status;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
ConnectionStatusEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the connection status identifier.
 * @return {Number} Connection status identifier
 */
ConnectionStatusEvent.prototype.status = function() {
  return this._status;
};

/**
 * Get the connection status as a String.
 * @return {String} 'online' if online, 'offline' if offline
 */
ConnectionStatusEvent.prototype.statusString = function() {
  return (this.status() === 1 ? 'online' : 'offline');
};

/**
 * Whether or not the friend is connected.
 * @return {Boolean} true if connected, false if not
 */
ConnectionStatusEvent.prototype.isConnected = function() {
  return (this.status() === 1);
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_avatar_info(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {Number} format Format identifier, corresponds to TOX_AVATAR_FORMAT
 * @param {Buffer} hash Hash (length is always TOX_HASH_LENGTH)
 */
var AvatarInfoEvent = function(friendnum, format, hash) {
  this._friendnum = friendnum;
  this._format = format;
  this._hash = hash;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
AvatarInfoEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the format identifier.
 * @return {Number} Format identifier
 */
AvatarInfoEvent.prototype.format = function() {
  return this._format;
};

/**
 * Get the hash.
 * @return {Buffer} Hash
 */
AvatarInfoEvent.prototype.hash = function() {
  return this._hash;
};

/**
 * Get the hash as a hex String.
 * @return {String} Hash as a hex String
 */
AvatarInfoEvent.prototype.hashHex = function() {
  return this._hash.toHex().toString();
};

/**
 * Checks whether or not the avatar appears valid. For now,
 * just checks that the format isn't TOX_AVATAR_FORMAT_NONE (0).
 * @return {Boolean} true if seemingly valid, false if not
 */
AvatarInfoEvent.prototype.isValid = function() {
  return this.format() !== 0;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_avatar_data(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {Number} format Format identifier, corresponds to TOX_AVATAR_FORMAT
 * @param {Buffer} hash Hash (length is always TOX_HASH_LENGTH)
 * @param {Buffer} data Data
 */
var AvatarDataEvent = function(friendnum, format, hash, data) {
  this._friendnum = friendnum;
  this._format = format;
  this._hash = hash;
  this._data = data;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
AvatarDataEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the format identifier.
 * @return {Number} Format identifier
 */
AvatarDataEvent.prototype.format = function() {
  return this._format;
};

/**
 * Get the hash.
 * @return {Buffer} Hash
 */
AvatarDataEvent.prototype.hash = function() {
  return this._hash;
};

/**
 * Get the hash as a hex String.
 * @return {String} Hash as a hex String
 */
AvatarDataEvent.prototype.hashHex = function() {
  return this._hash.toHex().toString();
};

/**
 * Get the data.
 * @return {Buffer} Data
 */
AvatarDataEvent.prototype.data = function() {
  return this._data;
};

/**
 * Checks whether or not the avatar appears valid. For now,
 * just checks that the format isn't TOX_AVATAR_FORMAT_NONE (0).
 * @return {Boolean} true if seemingly valid, false if not
 */
AvatarDataEvent.prototype.isValid = function() {
  return this.format() !== 0;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_group_invite(3).
 * @class
 * @param {Number} friendnum Friend number
 * @param {Number} type Type, corresponds to TOX_GROUPCHAT_TYPE_*
 * @param {Buffer} data Data required for accepting the invite
 */
var GroupInviteEvent = function(friendnum, type, data) {
  this._friendnum = friendnum;
  this._type = type;
  this._data = data;
};

/**
 * Get the friend number.
 * @return {Number} Friend number
 */
GroupInviteEvent.prototype.friend = function() {
  return this._friendnum;
};

/**
 * Get the invite type.
 * @return {Number} Invite type
 */
GroupInviteEvent.prototype.type = function() {
  return this._type;
};

/**
 * Get the data.
 * @return {Buffer} Data
 */
GroupInviteEvent.prototype.data = function() {
  return this._data;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_group_message(3).
 * @class
 * @param {Number} groupnum Group number
 * @param {Number} peernum Peer number
 * @param {String} message Message
 */
var GroupMessageEvent = function(groupnum, peernum, message) {
  this._groupnum = groupnum;
  this._peernum = peernum;
  this._message = message;
};

/**
 * Get the group number.
 * @return {Number} Group number
 */
GroupMessageEvent.prototype.group = function() {
  return this._groupnum;
};

/**
 * Get the peer number.
 * @return {Number} Peer number
 */
GroupMessageEvent.prototype.peer = function() {
  return this._peer;
};

/**
 * Get the message.
 * @return {String} Message
 */
GroupMessageEvent.prototype.message = function() {
  return this._message;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_group_action(3).
 * @class
 * @param {Number} groupnum Group number
 * @param {Number} peernum Peer number
 * @param {String} action Action
 */
var GroupActionEvent = function(groupnum, peernum, action) {
  this._groupnum = groupnum;
  this._peernum = peernum;
  this._action = action;
};

/**
 * Get the group number.
 * @return {Number} Group number
 */
GroupActionEvent.prototype.group = function() {
  return this._groupnum;
};

/**
 * Get the peer number.
 * @return {Number} Peer number
 */
GroupActionEvent.prototype.peer = function() {
  return this._peer;
};

/**
 * Get the action.
 * @return {String} Action
 */
GroupActionEvent.prototype.action = function() {
  return this._action;
};

/**
 * Event object fired by {@class Tox}.
 * Corresponds to tox_callback_group_namelist_change(3).
 * @class
 * @param {Number} groupnum Group number
 * @param {Number} peernum Peer number
 * @param {Number} change Change identifier, corresponds to TOX_CHAT_CHANGE
 */
var GroupNamelistChangeEvent = function(groupnum, peernum, change) {
  this._groupnum = groupnum;
  this._peernum = peernum;
  this._change = change;
};

/**
 * Get the group number.
 * @return {Number} Group number
 */
GroupNamelistChangeEvent.prototype.group = function() {
  return this._groupnum;
};

/**
 * Get the peer number.
 * @return {Number} Peer number
 */
GroupNamelistChangeEvent.prototype.peer = function() {
  return this._peer;
};

/**
 * Get the change identifier.
 * @return {Number} Change identifier
 */
GroupNamelistChangeEvent.prototype.change = function() {
  return this._change;
};

module.exports = {
  AvatarDataEvent: AvatarDataEvent,
  AvatarInfoEvent: AvatarInfoEvent,
  ConnectionStatusEvent: ConnectionStatusEvent,
  FriendActionEvent: FriendActionEvent,
  FriendMessageEvent: FriendMessageEvent,
  FriendRequestEvent: FriendRequestEvent,
  GroupActionEvent: GroupActionEvent,
  GroupInviteEvent: GroupInviteEvent,
  GroupMessageEvent: GroupMessageEvent,
  GroupNamelistChangeEvent: GroupNamelistChangeEvent,
  NameChangeEvent: NameChangeEvent,
  ReadReceiptEvent: ReadReceiptEvent,
  StatusMessageEvent: StatusMessageEvent,
  TypingChangeEvent: TypingChangeEvent,
  UserStatusEvent: UserStatusEvent
};
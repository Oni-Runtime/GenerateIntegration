function getHostName(args) {
  return System.Net.Dns.GetHostName(...args);
}

function getHostEntry(args) {
  return System.Net.Dns.GetHostEntry(...args);
}

function getHostEntryAsync(args) {
  return System.Net.Dns.GetHostEntryAsync(...args);
}

function beginGetHostEntry(args) {
  return System.Net.Dns.BeginGetHostEntry(...args);
}

function endGetHostEntry(args) {
  return System.Net.Dns.EndGetHostEntry(...args);
}

function getHostAddresses(args) {
  return System.Net.Dns.GetHostAddresses(...args);
}

function getHostAddressesAsync(args) {
  return System.Net.Dns.GetHostAddressesAsync(...args);
}

function beginGetHostAddresses(args) {
  return System.Net.Dns.BeginGetHostAddresses(...args);
}

function endGetHostAddresses(args) {
  return System.Net.Dns.EndGetHostAddresses(...args);
}

function getHostByName(args) {
  return System.Net.Dns.GetHostByName(...args);
}

function beginGetHostByName(args) {
  return System.Net.Dns.BeginGetHostByName(...args);
}

function endGetHostByName(args) {
  return System.Net.Dns.EndGetHostByName(...args);
}

function getHostByAddress(args) {
  return System.Net.Dns.GetHostByAddress(...args);
}

function resolve(args) {
  return System.Net.Dns.Resolve(...args);
}

function beginResolve(args) {
  return System.Net.Dns.BeginResolve(...args);
}

function endResolve(args) {
  return System.Net.Dns.EndResolve(...args);
}

function getType(args) {
  return System.Net.Dns.GetType(...args);
}

function toString(args) {
  return System.Net.Dns.ToString(...args);
}

function equals(args) {
  return System.Net.Dns.Equals(...args);
}

function getHashCode(args) {
  return System.Net.Dns.GetHashCode(...args);
}

export default {
  getHostName,
  getHostEntry,
  getHostEntryAsync,
  beginGetHostEntry,
  endGetHostEntry,
  getHostAddresses,
  getHostAddressesAsync,
  beginGetHostAddresses,
  endGetHostAddresses,
  getHostByName,
  beginGetHostByName,
  endGetHostByName,
  getHostByAddress,
  resolve,
  beginResolve,
  endResolve,
  getType,
  toString,
  equals,
  getHashCode,
}


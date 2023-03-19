function blockCopy(args) {
  return Buffer.BlockCopy(...args);
}

function byteLength(args) {
  return Buffer.ByteLength(...args);
}

function getByte(args) {
  return Buffer.GetByte(...args);
}

function setByte(args) {
  return Buffer.SetByte(...args);
}

function memoryCopy(args) {
  return Buffer.MemoryCopy(...args);
}

function getType(args) {
  return Buffer.GetType(...args);
}

function toString(args) {
  return Buffer.ToString(...args);
}

function equals(args) {
  return Buffer.Equals(...args);
}

function getHashCode(args) {
  return Buffer.GetHashCode(...args);
}

export default {
  blockCopy,
  byteLength,
  getByte,
  setByte,
  memoryCopy,
  getType,
  toString,
  equals,
  getHashCode,
}


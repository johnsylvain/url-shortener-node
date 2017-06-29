import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new Schema({
  username: String,
  password: String,
  admin: Boolean
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', function (next) {
  const SALTROUNDS = 8;
  const user = this;
  if(!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALTROUNDS, (err, salt) => {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) { return next(error); }

      user.password = hash;
      next();
    });
  });
});

export default mongoose.model('User', userSchema);

import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  providers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'provider'
  } 
});

const ClientModel = mongoose.model('client', clientSchema);

export default ClientModel;
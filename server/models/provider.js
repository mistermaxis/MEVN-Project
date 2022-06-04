import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
});

const ProviderModel = mongoose.model('provider', providerSchema);

export default ProviderModel;
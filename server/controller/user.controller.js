const userModel = require("../model/user.model");

class UserController {
  async create(req, res) {
    try {
      const newUser = new userModel(req.body);
      const { email } = newUser;

      const existUser = await userModel.findOne({ email });
      if (existUser) {
        return res.status(400).json({ message: "User already exist" });
      }

      const saveData = await newUser.save();
      res.status(200).json({ message: "User created successfully." });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    const allUsers = await userModel.find();
    res.status(200).json(allUsers);
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUserById(req, res) {
    const id = req.params.id;
    const user = await userModel.findById(id);
    res.status(200).json(user);
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    const id = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: `${deletedUser.name} has ben deleted` });
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new UserController();

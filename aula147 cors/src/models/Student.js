import Sequelize, { Model } from "sequelize";

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 30],
              msg: "Name must have between 3 and 30 characters.",
            },
          },
        },
        surname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 30],
              msg: "Surname must have between 4 and 30 characters.",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email is already registered.",
          },
          validate: {
            isEmail: {
              msg: "Please, enter a valid email.",
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Age must be a number.",
            },
          },
        },
        weight: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Weight must be an integer number.",
            },
          },
        },
        height: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Height must be a number.",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: "student_id" });
  }
}

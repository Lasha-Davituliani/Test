class BaseService {
  constructor(dataArray, entityName, requiredFields = []) {
    this.data = dataArray;
    this.entityName = entityName;
    this.requiredFields = requiredFields;
  }

  getAll = (req, res) => {
    res.json({ message: "success", data: this.data });
  };

  getPaginated = (req, res) => {
    let { page = 1, take = 3 } = req.query;
    take = take > 4 ? 4 : Number(take);
    page = Number(page);

    const start = (page - 1) * take;
    const end = take * page;
    const paginatedData = this.data.slice(start, end);

    res.json({
      message: "success",
      data: paginatedData,
      meta: {
        page,
        take,
        total: this.data.length,
        totalPages: Math.ceil(this.data.length / take),
      },
    });
  };

  getById = (req, res) => {
    const { id } = req.params;
    const item = this.data.find((el) => el.id === Number(id));

    if (!item) {
      return res.status(404).json({
        message: `${this.entityName} not found (id is invalid)`,
        data: null,
      });
    }

    res.json({ message: "success", data: item });
  };

  create = (req, res) => {
    const body = req.body;
    const lastId = this.data[this.data.length - 1]?.id || 0;
    const newItem = {
      id: lastId + 1,
      ...body,
    };
    for (const field of this.requiredFields) {
      if (!body[field] && body[field] !== false && body[field] !== 0) {
        return res.status(400).json({
          message: `${field} is required`,
          data: null,
        });
      }
    }
    // const lastId = this.data[this.data.length - 1]?.id || 0;
    // const newItem = {
    //   id: lastId + 1,
    //   ...body,
    // };

    this.data.push(newItem);

    res.status(201).json({
      message: `${this.entityName} created successfully`,
      data: newItem,
    });
  };

  delete = (req, res) => {
    const { id } = req.params;
    const index = this.data.findIndex((x) => x.id === Number(id));

    if (index === -1) {
      return res.status(404).json({
        message: `${this.entityName} not found (id is invalid)`,
      });
    }

    const deletedItem = this.data.splice(index, 1)[0];

    res.json({
      message: `${this.entityName} deleted successfully`,
      data: deletedItem,
    });
  };

  update = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const index = this.data.findIndex((x) => x.id === Number(id));

    if (index === -1) {
      return res.status(404).json({
        message: `${this.entityName} not found (id is invalid)`,
      });
    }

    this.data[index] = {
      ...this.data[index],
      ...body,
      id: this.data[index].id,
    };

    res.json({
      message: `${this.entityName} updated successfully`,
      data: this.data[index],
    });
  };
}

module.exports = BaseService;

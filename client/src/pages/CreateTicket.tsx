import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createTicket } from "../api/ticketAPI";
import { TicketData } from "../interfaces/TicketData";
import { UserData } from "../interfaces/UserData";
import { retrieveUsers } from "../api/userAPI";

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<TicketData | undefined>({
    id: 0,
    name: "",
    description: "",
    status: "Todo",
    assignedUserId: 1,
    assignedUser: null,
  });

  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[] | undefined>([]);

  const getAllUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to retrieve user info", err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newTicket) {
      const data = await createTicket(newTicket);
      console.log(data);
      navigate("/");
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleTextChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleUserChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  return (
    <div className="container max-w-lg mx-auto p-4 card bg-base-200 shadow-xl">
      <form className="form space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-xl font-semibold">Create Ticket</h1>

        <div className="form-control">
          <label htmlFor="tName" className="label font-semibold">
            Ticket Name
          </label>
          <textarea
            id="tName"
            name="name"
            value={newTicket?.name || ""}
            onChange={handleTextAreaChange}
            className="textarea textarea-bordered"
          />
        </div>

        <div className="form-control">
          <label htmlFor="tStatus" className="label font-semibold">
            Ticket Status
          </label>
          <select
            name="status"
            id="tStatus"
            value={newTicket?.status || ""}
            onChange={handleTextChange}
            className="select select-bordered"
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="tDescription" className="label font-semibold">
            Ticket Description
          </label>
          <textarea
            id="tDescription"
            name="description"
            value={newTicket?.description || ""}
            onChange={handleTextAreaChange}
            className="textarea textarea-bordered"
          />
        </div>

        <div className="form-control">
          <label htmlFor="tUserId" className="label font-semibold">
            Assign User
          </label>
          <select
            name="assignedUserId"
            value={newTicket?.assignedUserId || ""}
            onChange={handleUserChange}
            className="select select-bordered"
          >
            {users ? (
              users.map((user) => {
                return (
                  <option key={user.id} value={String(user.id)}>
                    {user.username}
                  </option>
                );
              })
            ) : (
              <textarea
                id="tUserId"
                name="assignedUserId"
                value={newTicket?.assignedUserId || 0}
                onChange={handleTextAreaChange}
              />
            )}
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;

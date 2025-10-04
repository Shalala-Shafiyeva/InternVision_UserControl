

function UserItem() {
  return (
    <div className="user_card w-full sm:w-full md:w-[48%] lg:w-[30%] xl:w-[23%] bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 overflow-hidden box-border">
      <div className="user_info flex flex-col text-center sm:text-left text-sm text-gray-800 dark:text-gray-300">
        <div className="fullname text-lg font-semibold text-gray-900 dark:text-white">
          Shalala Shafiyeva
        </div>
        <div className="age opacity-80">23</div>
        <div className="phone font-medium break-all">+994 50 000 00 00</div>
        <div className="email text-blue-500 dark:text-blue-400 text-sm truncate">
          shalala.shafiyeva@gmail.com
        </div>
        <div className="gender text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-1">
          Female
        </div>
      </div>
    </div>
  );
}

export default UserItem;

import React, { useEffect } from "react";
import Logout from "../logout/logout";
import useUser from "../../hooks/useUser"; 

const Dashboard = () => {
   const user = useUser();
  useEffect(() => {
    const mobileMenuButton = document.querySelector(
      ".mobile-menu-button"
    ) as HTMLElement;
    const sidebar = document.querySelector(".sidebar") as HTMLElement;
    const overlay = document.querySelector(".overlay") as HTMLElement;

    function toggleMobileMenu() {
      sidebar.classList.toggle("translate-x-0");
      overlay.classList.toggle("hidden");
      setTimeout(() => overlay.classList.toggle("opacity-0"), 0);
      document.body.style.overflow = sidebar.classList.contains("translate-x-0")
        ? "hidden"
        : "";
    }

    mobileMenuButton?.addEventListener("click", toggleMobileMenu);
    overlay?.addEventListener("click", toggleMobileMenu);

    return () => {
      mobileMenuButton?.removeEventListener("click", toggleMobileMenu);
      overlay?.removeEventListener("click", toggleMobileMenu);
    };
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-lg ml-2 text-teal-500">
              KELOMPOK 3
            </span>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="sidebar fixed lg:static bg-white w-64 h-full transform -translate-x-full lg:translate-x-0 transition-transform duration-300 shadow-md">
          <nav className="p-4 space-y-2">
            <a
              href="#"
              className="flex items-center p-3 text-blue-500 bg-teal-50 rounded-lg"
            >
              <span className="material-icons-outlined mr-3">dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <span className="material-icons-outlined mr-3">Iuran</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <span className="material-icons-outlined mr-3">Sumbangan</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <span className="material-icons-outlined mr-3">Pengeluaran</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <span className="material-icons-outlined mr-3">Kartu Kredit</span>
            </a>
            <div className="mt-8">
              <h3 className="px-3 text-sm font-medium text-gray-800">
                Lainnya
              </h3>
              <div className="mt-2 space-y-2">
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <div className="mt-4">
                    <Logout />
                  </div>
                </button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Card Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-teal-500 via-teal-200 to-blue-500 text-white p-10 rounded-lg shadow-lg max-w-md h-64">
                <div className="flex justify-between items-center mb-6 mt-2">
                  <div className="space-y-1">
                    <div className="flex space-x-4 text-2xl">
                      <span>3808</span>
                      <span>0103</span>
                      <span>1645</span>
                      <span>533</span>
                    </div>
                  </div>
                  <img
                    src="src\assets\image\visa.png"
                    alt="Visa"
                    className="h-10"
                  />
                </div>
                <div className="flex justify-between items-end mt-20">
                  <div>
                    <p className="py-1 px-1 text-sm opacity-80">Card Holder</p>
                    <div className="text-xl font-bold">
                      <h1>{user?.username}</h1>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-80">Expires</p>
                    <p className="font-medium">11/22</p>
                  </div>
                  <img
                    src="src\assets\image\mastercard.png"
                    alt="Bank BRI"
                    className="h-12"
                  />
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Total
                    </h3>
                    <p className="text-sm text-gray-500">Uang Kas</p>
                    <p className="text-xl font-bold mt-2">Rp 0</p>
                  </div>
                  <div className="bg-teal-500 p-3 rounded-lg">
                    <span className="material-icons-outlined text-white">
                      Uang Kas
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Total
                    </h3>
                    <p className="text-sm text-gray-500">Uang Keluar</p>
                    <p className="text-xl font-bold mt-2">Rp 0</p>
                  </div>
                  <div className="bg-teal-500 p-3 rounded-lg">
                    <span className="material-icons-outlined text-white">
                      Uang Keluar
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Total
                    </h3>
                    <p className="text-sm text-gray-500">Uang Masuk</p>
                    <p className="text-xl font-bold mt-2">Rp 0</p>
                  </div>
                  <div className="bg-teal-500 p-3 rounded-lg">
                    <span className="material-icons-outlined text-white">
                      Uang Masuk
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* History Table */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  History Sumbangan
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="pb-3 px-4">No</th>
                        <th className="pb-3 px-10">Tanggal</th>
                        <th className="pb-3 px-14">Nama</th>
                        <th className="pb-3 px-4">Angkatan</th>
                        <th className="pb-3 px-10">Nota</th>
                        <th className="pb-3 px-4">Jumlah</th>
                        <th className="pb-3 px-20">Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4">1</td>
                        <td className="py-2 px-4">2025-01-15</td>
                        <td className="py-2 px-4">John Doe</td>
                        <td className="py-2 px-4">2020</td>
                        <td className="py-2 px-4">
                          <a href="#" className="text-blue-500 underline">
                            Nota001.pdf
                          </a>
                        </td>
                        <td className="py-2 px-4">$100</td>
                        <td className="py-2 px-4">
                          Donasi pembangunan fasilitas
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4">2</td>
                        <td className="py-2 px-4">2025-01-10</td>
                        <td className="py-2 px-4">Jane Smith</td>
                        <td className="py-2 px-4">2018</td>
                        <td className="py-2 px-4">
                          <a href="#" className="text-blue-500 underline">
                            Nota002.pdf
                          </a>
                        </td>
                        <td className="py-2 px-4">$200</td>
                        <td className="py-2 px-4">Donasi acara reuni</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4">3</td>
                        <td className="py-2 px-4">2025-01-05</td>
                        <td className="py-2 px-4">Michael Johnson</td>
                        <td className="py-2 px-4">2015</td>
                        <td className="py-2 px-4">
                          <a href="#" className="text-blue-500 underline">
                            Nota003.pdf
                          </a>
                        </td>
                        <td className="py-2 px-4">$150</td>
                        <td className="py-2 px-4">Sumbangan kegiatan sosial</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-8 py-0 text-center text-sm text-gray-700">
        <p>© 2025, Dibuat dengan Cinta ❤️ by KELOMPOK 3 ❤️ for a better web.</p>
      </footer>
    </div>
  );
};

export default Dashboard;

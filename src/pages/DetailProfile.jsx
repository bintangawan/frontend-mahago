import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Edit2,
  Save,
  X,
} from "lucide-react";

export default function DetailProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("/images/ojek.svg");
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Contoh No. 123, Medan",
    birthDate: "1990-01-15",
    joinDate: "2024-01-01",
  });

  const [editedData, setEditedData] = useState({ ...profileData });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedData({ ...editedData, [field]: value });
  };

  const handleSave = () => {
    setProfileData({ ...editedData });
    setIsEditing(false);
    // Tambahkan logic untuk save ke backend di sini
    console.log("Saved data:", editedData);
  };

  const handleCancel = () => {
    setEditedData({ ...profileData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 md:pt-24 pb-24 md:pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-green-200 overflow-hidden mb-6">
          {/* Cover Banner */}
          <div className="h-32 bg-gradient-to-r from-green-500 to-green-600 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnYtNmg2djZoNnY2aC02djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>

          {/* Profile Image Section */}
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <div className="relative group">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 p-2 rounded-full cursor-pointer shadow-lg transition-colors">
                      <Camera className="h-5 w-5 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                <div className="mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {profileData.name}
                  </h1>
                  <p className="text-green-600 font-medium">
                    {profileData.email}
                  </p>
                </div>
              </div>

              {/* Edit Button */}
              <div className="mt-4 md:mt-0 md:mb-2">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors shadow-md"
                  >
                    <Edit2 className="h-4 w-4" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors shadow-md"
                    >
                      <Save className="h-4 w-4" />
                      Simpan
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-medium transition-colors shadow-md"
                    >
                      <X className="h-4 w-4" />
                      Batal
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Information Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-green-200 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <User className="h-5 w-5 text-green-600" />
            Informasi Personal
          </h2>

          <div className="space-y-6">
            {/* Nama Lengkap */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-xl">
                <User className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nama Lengkap
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-2.5 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">
                    {profileData.name}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-xl">
                <Mail className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editedData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-2.5 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">
                    {profileData.email}
                  </p>
                )}
              </div>
            </div>

            {/* Nomor Telepon */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-xl">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nomor Telepon
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editedData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-2.5 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">
                    {profileData.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Alamat */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-xl">
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Alamat
                </label>
                {isEditing ? (
                  <textarea
                    value={editedData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    rows="3"
                    className="w-full px-4 py-2.5 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">
                    {profileData.address}
                  </p>
                )}
              </div>
            </div>

            {/* Tanggal Lahir */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-xl">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Tanggal Lahir
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    value={editedData.birthDate}
                    onChange={(e) =>
                      handleInputChange("birthDate", e.target.value)
                    }
                    className="w-full px-4 py-2.5 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">
                    {new Date(profileData.birthDate).toLocaleDateString(
                      "id-ID",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                )}
              </div>
            </div>

            {/* Bergabung Sejak */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-xl">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Bergabung Sejak
                </label>
                <p className="text-gray-800 font-medium">
                  {new Date(profileData.joinDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <p className="text-green-100 text-sm mb-1">Total Pesanan</p>
            <p className="text-3xl font-bold">24</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <p className="text-green-100 text-sm mb-1">Poin Reward</p>
            <p className="text-3xl font-bold">1,250</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <p className="text-green-100 text-sm mb-1">Status</p>
            <p className="text-3xl font-bold">Gold</p>
          </div>
        </div>
      </div>
    </div>
  );
}
